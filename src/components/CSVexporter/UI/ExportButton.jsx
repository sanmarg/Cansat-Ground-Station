import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const ExportButton = () => {
  const telemetryData = useSelector((state) => state.telemetry.value);
  return (
    <div>
      <Button
        variant="contained"
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
