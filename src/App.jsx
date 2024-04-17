import "./App.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GraphComponent from "./components/GraphComponent/GraphComponent";
import Rocketmodel from "./components/Rocketmodel/Rocketmodel";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [orientation, setOrientation] = useState({ x: 0, y: 0, z: 0 });
  const [graphData, setGraphData] = useState([]);
  const telemetryData = useSelector((state) => state.telemetry.value);

  useEffect(() => {
    const interval = setInterval(() => {
      if (telemetryData) {
        setOrientation({
          x: telemetryData.tiltX,
          y: telemetryData.tiltY,
          z: telemetryData.rotZ,
        });
      } else {
        setOrientation({
          x: 0,
          y: 0,
          z: 0,
        });
      }
    }, 10);

    return () => clearInterval(interval);
  }, [telemetryData]);

  useEffect(() => {
    if (telemetryData) {
      console.log("packetCount:", telemetryData.packetCount);
    }
  }, [telemetryData]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Rocketmodel orientation={orientation} />
        </div>
        <div>
          {/* <GraphComponent data={graphData} /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
