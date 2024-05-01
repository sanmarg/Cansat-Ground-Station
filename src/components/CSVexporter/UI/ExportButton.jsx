import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { appendtoCSV, handleExportCSV } from "../CSVgenerator";

const ExportButton = () => {
  const telemetryData = useSelector((state) => state.telemetry.value);
  const connected = useSelector((state) => state.connected.value);

  useEffect(() => {
    if (connected) {
      appendtoCSV(telemetryData);
    }
  }, [telemetryData]);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleExportCSV}
        sx={{
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "#f8f8ff",
          },
          minWidth: "130px",
        }}
      >
        Export CSV
      </Button>
    </div>
  );
};

export default ExportButton;
