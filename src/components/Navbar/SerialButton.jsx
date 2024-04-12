import SerialProvider, { useSerial } from "../../hooks/SerialProvider";
import Button from "@mui/material/Button";

function SerialButton() {
    const { connect, disconnect, portState } = useSerial();
    const buttonStyle = {
      backgroundColor: "white",
      color: "Black",
      border: "1px solid white",
      borderRadius: "5px",
      padding: "5px 10px",
      cursor: "pointer",
      fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    };
  
    return (
      <div>
        <Button style={buttonStyle} onClick={portState === "open" ? disconnect : connect}>
          {portState === "open" ? "Disconnect" : "Connect"}
        </Button>
      </div>
    );
  }

  export default SerialButton