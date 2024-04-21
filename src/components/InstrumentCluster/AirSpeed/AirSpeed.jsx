import "./AirSpeed.css";
import { useEffect,useState } from "react";
import AirSpeedDial from "../../../Assets/img/speed_mechanics.svg?react";
import Needle from "../../../Assets/img/fi_needle.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

const AirSpeed = ({ value = 0 }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    setRotationAngle(value + 90);
  }, [value]);
  return (
    <div className="container">
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
