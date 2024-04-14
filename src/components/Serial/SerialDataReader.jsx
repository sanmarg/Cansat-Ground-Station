import React, { useState, useEffect } from "react";

const SerialDataReader = ({ onDataReceived, baudRate }) => {
  const [port, setPort] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [reader, setReader] = useState(null);

  async function readData() {
    let receivedData = new Uint8Array();

    while (port && port.readable) {
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            console.log("Serial port closed.");
            break;
          }
          const newData = new Uint8Array(receivedData.length + value.length);
          newData.set(receivedData);
          newData.set(value, receivedData.length);
          receivedData = newData;

          const newlineIndex = receivedData.indexOf(10);
          if (newlineIndex !== -1) {
            const dataBeforeNewline = receivedData.slice(0, newlineIndex);
            console.log("Received data:", packetCount);
            receivedData = receivedData.slice(newlineIndex + 1);
            const dataView = new DataView(dataBeforeNewline.buffer);
            const packetCount = dataView.getFloat32(0, true);
          }
        }
      } catch (error) {
        console.error("Error reading data:", error);
      }
    }
  }

  async function connect() {
    try {
      const newPort = await navigator.serial.requestPort();
      if (!newPort) {
        console.error("No port found"); // Debug log
        return;
      }
      await newPort.open({ baudRate: baudRate });
      setPort(newPort);
      setReader(newPort.readable.getReader());
      setIsConnected(true);
    } catch (err) {
      window.alert(err.message);
    }
  }

  async function disconnect() {
    try {
      if (reader) {
        reader.releaseLock();
        setReader(null);
      }

      if (port) {
        await port.close();
        setPort(null);
      }

      setIsConnected(false);
    } catch (err) {
      window.alert(err.message);
    }
  }

  useEffect(() => {
    if (isConnected && port) {
      readData();
    }
  }, [isConnected, port]);

  return (
    <div>
      <button onClick={!isConnected ? connect : disconnect}>
        {isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
};

export default SerialDataReader;
