import "./AirSpeed.css";
import AirSpeedDial from "../../../Assets/img/speed_mechanics.svg?react";
import Needle from "../../../Assets/img/fi_needle.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

const AirSpeed = ({ speed = 0, width = 300, height = 300 }) => {
  return (
    <div className="container" style={{ width, height }}>
      <AirSpeedDial className="dial-container" />
      <Needle
        className="needle-container"
        style={{ transform: `rotate(${2 * speed + 90}deg)` }}
      />
      <Border className="border-container" />
    </div>
  );
};

export default AirSpeed;
