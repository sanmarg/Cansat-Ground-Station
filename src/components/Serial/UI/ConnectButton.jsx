import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { readData, connect, disconnect } from "../Serial";

const ConnectButton = () => {
  const serialSupported = "serial" in navigator;
  const [port, setPort] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [reader, setReader] = useState(null);
  const [portFound, setportFound] = useState(true);
  const baudRate = useSelector((state) => state.baudrate.value);
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (!isConnected) {
      await connect(setportFound, setPort, setReader, setIsConnected, baudRate);
    } else {
      await disconnect(setIsConnected, reader, setReader, port, setPort);
    }
  };

  useEffect(() => {
    readData(reader, isConnected, port, dispatch);
    return () => {
      if (reader) {
        reader.releaseLock();
      }
    };
  }, [isConnected, port]);

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: !isConnected ? "green" : "red",
          color: "white",
          border: !portFound ? "2px solid #8B0000" : null,
          "&:hover": {
            backgroundColor: !isConnected ? "#006400" : "#8B0000",
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
        {isConnected ? "Disconnect" : "Connect"}
      </Button>
    </div>
  );
};

export default ConnectButton;
