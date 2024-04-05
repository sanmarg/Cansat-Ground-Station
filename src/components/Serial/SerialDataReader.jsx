import React, { useState, useEffect } from "react";

const SerialDataReader = ({ onDataReceived, baudRate }) => {
  const [port, setPort] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState(null);
  const [reader, setReader] = useState(null);
  let keepReading = true;
  let closedPromise;

  const readData = async () => {
    console.log('readData called'); // Debug log
    while (port && port.readable && keepReading) {
      console.log('Port is readable'); // Debug log
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            console.log('Serial port closed.');
            break;
          }
          // Print the received data as a string
          const receivedData = new TextDecoder().decode(value);
          console.log('Received data:', receivedData);
          setData(receivedData);
        }
      } catch (error) {
        console.error('Error reading data:', error);
      }
    }
  };

  useEffect(() => {
    if (data) {
      onDataReceived(data);
    }
  }, [data]);

  const connectToSerial = async () => {
    try {
      if (!isConnected) {
        const newPort = await navigator.serial.requestPort();
        if (!newPort) {
          console.error('No port found'); // Debug log
          return;
        }
        await newPort.open({ baudRate: baudRate });
        setPort(newPort);
        setReader(newPort.readable.getReader());
        setIsConnected(true);
      } else {
        if (port) {
          setIsConnected(false);
          reader.releaseLock();
          setReader(null);
          await port.close();
        }
      }
    } catch (err) {
      window.alert(err.message);
    }
  };

  useEffect(() => {
    if (isConnected && port) {
      closedPromise = readData();
    }
  }, [isConnected, port]);


  return (
    <div>
      <button onClick={connectToSerial}>
        {isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
};

export default SerialDataReader;
