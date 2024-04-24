import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { setBaudrate } from "../../../features/configs/baudrateSlice";

const BaudSelector = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.baudrate.value);
  const handleChange = (event) => {
    dispatch(setBaudrate(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 10 }}>
      <Select
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
            color: "grey",
          },
          maxHeight: 37,
          minWidth: 100,
        }}
      >
        <MenuItem value={9600}>9600</MenuItem>
        <MenuItem value={19200}>19200</MenuItem>
        <MenuItem value={38400}>38400</MenuItem>
        <MenuItem value={57600}>57600</MenuItem>
        <MenuItem value={115200}>115200</MenuItem>
      </Select>
    </Box>
  );
};

export default BaudSelector;
