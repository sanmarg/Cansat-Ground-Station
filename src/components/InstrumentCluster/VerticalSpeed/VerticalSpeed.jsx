import "./VerticalSpeed.css";
import { useEffect, useState } from "react";
import Vertical from "../../../Assets/img/vertical_mechanics.svg?react";
import Needle from "../../../Assets/img/fi_needle.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

const VerticalSpeed = ({ verticalSpeed = 0, width = 300, height = 300 }) => {
  return (
    <div className="container">
      <Vertical className="vertical-container" style={{ width, height }} />
      <Needle className="needle-container" />
      <Border className="border-container" />
    </div>
  );
};

export default VerticalSpeed;
