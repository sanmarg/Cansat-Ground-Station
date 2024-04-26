import { pushData } from "../../features/telemetry/TelemetrySlice";

export async function readData(reader, isConnected, port, dispatch) {
  let dataBuffer = [];
  let receivedData;

  while (isConnected && port.readable) {
    try {
      while (true) {
        const { value, done } = await reader.read();

        if (done) {
          console.log("Serial port closed.");
          break;
        }

        dataBuffer = dataBuffer.concat(Array.from(value));

        if (dataBuffer.length >= 49) {
          for (let i = 0; i < dataBuffer.length; i++) {
            if (i === 0 && dataBuffer[i] === 15 && dataBuffer[48] === 0) {
              receivedData = new Uint8Array(dataBuffer.slice(1, 48));
              dataBuffer.splice(0, 50);
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
                rotZ,
              };
              dispatch(pushData(dataSend));
              break;
            } else {
              dataBuffer.pop();
              i--;
            }
          }
        }
      }
    } catch (error) {
      console.error("Error reading data:", error);
    }
  }
}

export async function connect(
  setportFound,
  setPort,
  setReader,
  setIsConnected,
  baudRate
) {
  try {
    setportFound(true);
    const newPort = await navigator.serial.requestPort();
    if (!newPort) {
      console.error("No port found");
      return;
    }
    await newPort.open({ baudRate: baudRate });
    setPort(newPort);
    setReader(newPort.readable.getReader());
    setIsConnected(true);
    sessionStorage.removeItem("csvData");
    sessionStorage.setItem(
      "csvData",
      "packetCount,mode,state,altitude,temperature,pressure,voltage,gpsTime,gpsLatitude,gpsLongitude,gpsSats,tiltX,tiltY,rotZ\n"
    );
  } catch (err) {
    setportFound(false);
  }
}

export async function disconnect(
  setIsConnected,
  reader,
  setReader,
  port,
  setPort
) {
  try {
    setIsConnected(false);
    if (reader) {
      reader.releaseLock();
      setReader(null);
    }

    if (port) {
      await port.close();
      setPort(null);
    }
  } catch (err) {
    window.alert(err.message);
  }
}
