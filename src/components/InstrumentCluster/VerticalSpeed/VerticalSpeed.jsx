import "./VerticalSpeed.css";
import Vertical from "../../../Assets/img/vertical_mechanics.svg?react";
import Needle from "../../../Assets/img/fi_needle.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

const VerticalSpeed = ({ verticalSpeed = 0, width = 300, height = 300 }) => {
  return (
    <div className="container" style={{ width, height }}>
      <Vertical className="vertical-container" />
      <Needle
        className="needle-container"
        style={{ transform: `translateY(${verticalSpeed}px)` }}
      />
      <Border className="border-container" />
    </div>
  );
};

export default VerticalSpeed;
