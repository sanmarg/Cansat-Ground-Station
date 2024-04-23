import "./Heading.css";
import Background from "../../../Assets/img/horizon_back.svg?react";
import HorizonBall from "../../../Assets/img/horizon_ball.svg?react";
import HorizonCircle from "../../../Assets/img/horizon_circle.svg?react";
import HorizonMechanics from "../../../Assets/img/horizon_mechanics.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

const Heading = ({ pitch = 0, roll = 0, width = 300, height = 300 }) => {
  return (
    <div className="container" style={{ width, height }}>
      <Background
        className="container-background"
        style={{ transform: `rotate(${roll}deg)` }}
      />
      <HorizonBall
        className="container-horizontal"
        style={{ transform: `translateY(${pitch}px) rotate(${roll}deg)` }}
      />
      <HorizonCircle
        className="container-background"
        style={{ transform: `rotate(${roll}deg)` }}
      />
      <HorizonMechanics className="container-fixed" />
      <Border className="container-fixed" />
    </div>
  );
};

export default Heading;
