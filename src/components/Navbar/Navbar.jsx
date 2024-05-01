import "./Navbar.css";
import ConnectButton from "../Serial/UI/ConnectButton";
import BaudSelector from "../Serial/UI/BaudSelector";
import ExportButton from "../CSVexporter/UI/ExportButton";
import StartMission from "../StartMission/UI/StartMission";
import { AppBar, Toolbar, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#1a1a1a" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <img className="logo-container" src="gagan.png" alt="Logo" />

          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ ml: 2 }}>
            <StartMission />
          </Box>

          <Box sx={{ ml: 2 }}>
            <ExportButton />
          </Box>

          <Box sx={{ ml: 2 }}>
            <BaudSelector />
          </Box>

          <Box sx={{ ml: 2 }}>
            <ConnectButton />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
