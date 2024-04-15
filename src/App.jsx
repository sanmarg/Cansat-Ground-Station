import "./App.css";
import React, { useState, useEffect } from "react";
import GraphComponent from "./components/GraphComponent";
import Rocketmodel from "./components/Rocketmodel/Rocketmodel";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [orientation, setOrientation] = useState({ x: 0, y: 0, z: 0 });
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrientation({
        x: Math.random() * 360,
        y: Math.random() * 360,
        z: Math.random() * 360,
      });
    }, 100);

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
        <Rocketmodel orientation={orientation} />
        <GraphComponent data={graphData} />
      </div>
    </div >
  );
};

export default App;
