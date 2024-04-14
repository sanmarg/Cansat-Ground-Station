import "./App.css";
import React, { useState, useEffect } from "react";
import GraphComponent from "./components/GraphComponent";
import Rocketmodel from "./components/Rocketmodel";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [orientation, setOrientation] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setOrientation({
        x: Math.random() * 360,
        y: Math.random() * 360,
        z: Math.random() * 360,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="Navbar-container">
        <Navbar />
      </div>
      <div className="Rocket-container">
      {/* <Rocketmodel orientation={orientation} /> */}
      </div>
    </div>
  );
};

export default App;
