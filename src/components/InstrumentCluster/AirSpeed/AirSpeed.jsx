import "./AirSpeed.css";
import { useEffect, useState } from "react";
import AirSpeedDial from "../../../Assets/img/speed_mechanics.svg?react";
import Needle from "../../../Assets/img/fi_needle.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

const AirSpeed = ({ speed = 0, width = 300, height = 300 }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    setRotationAngle(2*speed + 90);
  }, [speed]);
  return (
    <div className="container" style={{ width, height }}>
      <AirSpeedDial className="dial-container" />
      <Needle
        className="needle-container"
        style={{ transform: `rotate(${rotationAngle}deg)` }}
      />
      <Border className="border-container" />
    </div>
  );
};

export default AirSpeed;
