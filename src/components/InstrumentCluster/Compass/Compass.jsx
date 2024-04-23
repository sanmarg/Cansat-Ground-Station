import "./Compass.css";
import Heading from "../../../Assets/img/heading_yaw.svg?react";
import Pointer from "../../../Assets/img/heading_mechanics.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

const Compass = ({ direction = 0, width = 300, height = 300 }) => {

  return (
    <div className="container" style={{ width, height }}>
      <Heading
        className="heading-container"
        style={{ transform: `rotate(${direction}deg)` }}
      />
      <Pointer className="pointer-container" />
      <Border className="border-container" />
    </div>
  );
};

export default Compass;
