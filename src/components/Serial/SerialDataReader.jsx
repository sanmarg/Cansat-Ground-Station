import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';

const SerialDataReader = ({ baudRate }) => {
  const [port, setPort] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [reader, setReader] = useState(null);
  const serialSupported ='serial' in navigator;

  async function readData() {
    let dataBuffer = [];

    while (port && port.readable) {
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            console.log("Serial port closed.");
            break;
          }
          dataBuffer = dataBuffer.concat(Array.from(value));
          if (dataBuffer.length >= 47) {
            const receivedData = new Uint8Array(dataBuffer.slice(0, 47));
            const dataView = new DataView(receivedData.buffer);

            const packetCount = dataView.getFloat32(0, true);
            const mode = dataView.getUint8(4);
            const state = dataView.getUint8(5);
            const altitude = dataView.getFloat32(6, true);
            const temperature = dataView.getFloat32(10, true);
            const pressure = dataView.getFloat32(14, true);
            const voltage = dataView.getFloat32(18, true);
            const gpsTime = dataView.getFloat32(22, true);
            const gpsLatitude = dataView.getFloat32(26, true);
            const gpsLongitude = dataView.getFloat32(30, true);
            const gpsSats = dataView.getUint8(34);
            const tiltX = dataView.getFloat32(35, true);
            const tiltY = dataView.getFloat32(39, true);
            const rotZ = dataView.getFloat32(43, true);
            const dataSend = {
              packetCount,
              mode,
              state,
              altitude,
              temperature,
              pressure,
              voltage,
              gpsTime,
              gpsLatitude,
              gpsLongitude,
              gpsSats,
              tiltX,
              tiltY,
              rotZ
            };
            console.log(tiltX + " " + tiltY + " " + rotZ);
            dataBuffer = dataBuffer.slice(47);
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
        console.error("No port found");
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
    if (isConnected && port && reader) {
      readData();
    }
    return () => {
      if (reader) {
        reader.releaseLock();
      }
    };
  }, [isConnected, port, reader]);

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: !isConnected ? 'green' : 'red',
          color: 'white',
          '&:hover': {
            backgroundColor: !isConnected ? '#006400' : '#8B0000'
          },
          '&:disabled': {
            backgroundColor: 'red',
            color: 'white',
          },
          minWidth: '130px'
        }}
        onClick={!isConnected ? connect : disconnect}
        disabled={!serialSupported}
      >
        {isConnected ? "Disconnect" : "Connect"}
      </Button>
    </div>
  );
};

export default SerialDataReader;
