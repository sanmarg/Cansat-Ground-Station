import "./App.css";
import React, { useState, useEffect } from "react";
// import GraphComponent from "./components/GraphComponent";
// import Rocketmodel from "./components/Rocketmodel";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [data, setData] = useState([]);

  const handleDataReceived = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
