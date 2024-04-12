import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const BaudSelector = ({ value, onChange }) => {
  const menuStyle = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid white",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    minWidth: 120,
    maxHeight: 40,
  };
  return (
    <Select
      labelId="baud-rate-label"
      id="baud-rate"
      value={value}
      onChange={onChange}
      label="Baud Rate"
      style={menuStyle}
    >
      <MenuItem value={9600}>9600</MenuItem>
      <MenuItem value={19200}>19200</MenuItem>
      <MenuItem value={38400}>38400</MenuItem>
      <MenuItem value={57600}>57600</MenuItem>
      <MenuItem value={115200}>115200</MenuItem>
    </Select>
  );
};

export default BaudSelector;
