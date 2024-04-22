import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import AirSpeed from "./components/InstrumentCluster/AirSpeed/AirSpeed";
import Altimeter from "./components/InstrumentCluster/Altimeter/Altimeter";
import VerticalSpeed from "./components/InstrumentCluster/VerticalSpeed/VerticalSpeed";
import Rocketmodel from "./components/Rocketmodel/Rocketmodel"

const App = () => {
  const telemetryData = useSelector((state) => state.telemetry.value);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Rocketmodel />
      </div>
      <div style={{ display: "flex" }}>
        <AirSpeed />
        <Altimeter />
        <VerticalSpeed />
      </div>
    </>
  );
};

export default App;
