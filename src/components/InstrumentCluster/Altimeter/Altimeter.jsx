import { useState, useEffect } from "react";
import "./Altimeter.css";
import AltimeterPressure from "../../../Assets/img/altitude_pressure.svg?react";
import AltimeterTick from "../../../Assets/img/altitude_ticks.svg?react";
import Needle from "../../../Assets/img/fi_needle.svg?react";
import SmallNeedle from "../../../Assets/img/fi_needle_small.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

const Altimeter = ({ value = 0 }) => {
  return (
    <div className="container">
      <AltimeterPressure className="test" />
      <AltimeterTick className="test" />
      <SmallNeedle className="test" />
      <Needle className="test" />
      <Border className="test" />
    </div>
  );
};

export default Altimeter;
