import "./App.css";
import React, { useState, useEffect } from "react";
import GraphComponent from "./components/GraphComponent/GraphComponent";
import Rocketmodel from "./components/Rocketmodel/Rocketmodel";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [orientation, setOrientation] = useState({ x: 0, y: 0, z: 0 });
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrientation(prevOrientation => ({
        x: (prevOrientation.x + 1) % 360,
        y: (prevOrientation.y + 1) % 360,
        z: (prevOrientation.z + 10) % 360,
      }));
    }, 10);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({ x: i, y: Math.random() * 100 });
    }
    return data;
  };

  setGraphData(generateRandomData());

  const interval = setInterval(() => {
    setGraphData(generateRandomData());
  }, 500);

  return () => clearInterval(interval);
}, []);

return (
  <div>
    <div>
      <Navbar />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <Rocketmodel orientation={orientation} />
      </div>
      <div>
        <GraphComponent data={graphData} />
      </div>
    </div>
  </div >
);
};

export default App;
