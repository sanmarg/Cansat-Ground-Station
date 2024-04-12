import Button from "@mui/material/Button";

function ButtonComponent({ portState, handleConnect, disconnect }) {
  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid white",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    minWidth: 115,
  };

  return (
    <div>
      <Button
        style={buttonStyle}
        onClick={portState ? disconnect : handleConnect}
      >
        {portState ? "Disconnect" : "Connect"}
      </Button>
    </div>
  );
}

export default ButtonComponent;
