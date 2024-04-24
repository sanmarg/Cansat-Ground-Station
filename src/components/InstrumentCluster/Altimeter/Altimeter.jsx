import "./Altimeter.css";
import AltimeterPressure from "../../../Assets/img/altitude_pressure.svg?react";
import AltimeterTick from "../../../Assets/img/altitude_ticks.svg?react";
import Needle from "../../../Assets/img/fi_needle.svg?react";
import SmallNeedle from "../../../Assets/img/fi_needle_small.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

const Altimeter = ({
  altitude = 0,
  pressure = 0,
  width = 300,
  height = 300,
}) => {
  return (
    <div className="container" style={{ width, height }}>
      <AltimeterPressure
        className="pressure-container"
        style={{ transform: `rotate(${pressure}deg)` }}
      />
      <AltimeterTick className="tick-container" />
      <SmallNeedle
        className="small-needle-container"
        style={{ transform: `rotate(${altitude * 0.036}deg)` }}
      />
      <Needle
        className="needle-container"
        style={{ transform: `rotate(${altitude * 0.36 + 90}deg)` }}
      />
      <Border className="border-container" />
    </div>
  );
};

export default Altimeter;
