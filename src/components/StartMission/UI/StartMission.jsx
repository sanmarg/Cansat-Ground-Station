import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { setLaunch } from "../../../features/mission-state/launchSlice";

const StartMission = () => {
  const connected = useSelector((state) => state.connected.value);
  const launch = useSelector((state) => state.launch.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (launch) {
      dispatch(setLaunch(false));
    } else {
      dispatch(setLaunch(true));
    }
  };

  return connected ? (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: !launch ? "green" : "red",
          color: "white",
          "&:hover": {
            backgroundColor: !launch ? "#006400" : "#8B0000",
          },
          "&:disabled": {
            backgroundColor: "red",
            color: "white",
          },
          minWidth: "130px",
        }}
        onClick={handleClick}
      >
        {launch ? "Stop💥" : "Launch🚀"}
      </Button>
    </div>
  ) : null;
};

export default StartMission;
