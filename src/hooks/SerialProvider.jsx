import React, { useContext,createContext, useEffect, useRef, useState } from "react";

export const SerialContext = createContext();

export const useSerial = () => useContext(SerialContext);

const SerialProvider = ({ children }) => {
  const [canUseSerial, setCanUseSerial] = useState(() => "serial" in navigator);
  const [portState, setPortState] = useState("closed");
  const [hasTriedAutoconnect, setHasTriedAutoconnect] = useState(false);
  const [hasManuallyDisconnected, setHasManuallyDisconnected] = useState(false);

  const portRef = useRef(null);
  const readerRef = useRef(null);
  const readerClosedPromiseRef = useRef(Promise.resolve());

  const currentSubscriberIdRef = useRef(0);
  const subscribersRef = useRef(new Map());

  const subscribe = (callback) => {
    const id = currentSubscriberIdRef.current;
    subscribersRef.current.set(id, callback);
    currentSubscriberIdRef.current++;

    return () => {
      subscribersRef.current.delete(id);
    };
  };

  const readUntilClosed = async (port) => {
    if (port.readable) {
      const textDecoder = new TextDecoderStream();
      const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
      readerRef.current = textDecoder.readable.getReader();

      try {
        while (true) {
          const { value, done } = await readerRef.current.read();
          if (done) {
            break;
          }
          const timestamp = Date.now();
          Array.from(subscribersRef.current).forEach(([name, callback]) => {
            callback({ value, timestamp });
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        readerRef.current.releaseLock();
      }

      await readableStreamClosed.catch(() => {}); // Ignore the error
    }
  };

  const openPort = async (port) => {
    try {
      await port.open({ baudRate: 9600 });
      portRef.current = port;
      setPortState("open");
      setHasManuallyDisconnected(false);
    } catch (error) {
      setPortState("closed");
      console.error("Could not open port");
    }
  };

  const manualConnectToPort = async () => {
    if (canUseSerial && portState === "closed") {
      setPortState("opening");
      try {
        const port = await navigator.serial.requestPort();
        await openPort(port);
        return true;
      } catch (error) {
        setPortState("closed");
        console.error("User did not select port");
      }
    }
    return false;
  };

  const autoConnectToPort = async () => {
    if (canUseSerial && portState === "closed") {
      setPortState("opening");
      const availablePorts = await navigator.serial.getPorts();
      if (availablePorts.length) {
        const port = availablePorts[0];
        await openPort(port);
        return true;
      } else {
        setPortState("closed");
      }
      setHasTriedAutoconnect(true);
    }
    return false;
  };

  const manualDisconnectFromPort = async () => {
    if (canUseSerial && portState === "open") {
      const port = portRef.current;
      if (port) {
        setPortState("closing");
        readerRef.current?.cancel();
        await readerClosedPromiseRef.current;
        readerRef.current = null;
        await port.close();
        portRef.current = null;
        setHasManuallyDisconnected(true);
        setHasTriedAutoconnect(false);
        setPortState("closed");
      }
    }
  };

  const onPortDisconnect = async () => {
    await readerClosedPromiseRef.current;
    readerRef.current = null;
    readerClosedPromiseRef.current = Promise.resolve();
    portRef.current = null;
    setHasTriedAutoconnect(false);
    setPortState("closed");
  };

  useEffect(() => {
    const port = portRef.current;
    if (portState === "open" && port) {
      const aborted = { current: false };
      readerRef.current?.cancel();
      readerClosedPromiseRef.current.then(() => {
        if (!aborted.current) {
          readerRef.current = null;
          readerClosedPromiseRef.current = readUntilClosed(port);
        }
      });

      navigator.serial.addEventListener("disconnect", onPortDisconnect);

      return () => {
        aborted.current = true;
        navigator.serial.removeEventListener("disconnect", onPortDisconnect);
      };
    }
  }, [portState]);

  useEffect(() => {
    if (
      canUseSerial &&
      !hasManuallyDisconnected &&
      !hasTriedAutoconnect &&
      portState === "closed"
    ) {
      autoConnectToPort();
    }
  }, [canUseSerial, hasManuallyDisconnected, hasTriedAutoconnect, portState]);

  return (
    <SerialContext.Provider
      value={{
        canUseSerial,
        hasTriedAutoconnect,
        subscribe,
        portState,
        connect: manualConnectToPort,
        disconnect: manualDisconnectFromPort,
      }}
    >
      {children}
    </SerialContext.Provider>
  );
};

export default SerialProvider;
