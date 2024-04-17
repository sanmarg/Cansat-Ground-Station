import React, { useState } from "react";
import "./Navbar.css";
import SerialDataReader from "../Serial/SerialDataReader";
import BaudSelector from "../Serial/BaudSelector";
import { AppBar, Toolbar, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#1a1a1a" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <img className="logo-container" src="gagan.png" alt="Logo" />
          <Box sx={{ flexGrow: 1 }} />
          <BaudSelector />
          <Box sx={{ ml: 2 }}>
            <SerialDataReader />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
