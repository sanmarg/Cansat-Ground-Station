import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { readData, connect, disconnect } from "../Serial";

const ConnectButton = () => {
  const serialSupported = "serial" in navigator;
  const [port, setPort] = useState(null);
  const [reader, setReader] = useState(null);
  const [portFound, setportFound] = useState(true);
  const connected = useSelector((state) => state.connected.value);
  const baudRate = useSelector((state) => state.baudrate.value);
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (!connected) {
      await connect(setportFound, setPort, setReader, dispatch, baudRate);
    } else {
      await disconnect(dispatch, reader, setReader, port, setPort);
    }
  };

  useEffect(() => {
    if (reader) {
      readData(reader, connected, port, dispatch);
    }
    return () => {
      if (reader) {
        reader.releaseLock();
      }
    };
  }, [connected, port]);

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: !connected ? "green" : "red",
          color: "white",
          border: !portFound ? "2px solid #8B0000" : null,
          "&:hover": {
            backgroundColor: !connected ? "#006400" : "#8B0000",
          },
          "&:disabled": {
            backgroundColor: "red",
            color: "white",
          },
          minWidth: "130px",
        }}
        onClick={handleClick}
        disabled={!serialSupported}
      >
        {connected ? "Disconnect" : "Connect"}
      </Button>
    </div>
  );
};

export default ConnectButton;
