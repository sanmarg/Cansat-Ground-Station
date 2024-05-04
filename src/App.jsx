import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import AirSpeed from "./components/InstrumentCluster/AirSpeed/AirSpeed";
import Altimeter from "./components/InstrumentCluster/Altimeter/Altimeter";
import VerticalSpeed from "./components/InstrumentCluster/VerticalSpeed/VerticalSpeed";
import Rocketmodel from "./components/Rocketmodel/Rocketmodel";
import Heading from "./components/InstrumentCluster/Heading/Heading";

const App = () => {
  const telemetryData = useSelector((state) => state.telemetry.value);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <Rocketmodel />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <AirSpeed />
            <Altimeter />
          </div>
          <div style={{ display: "flex" }}>
            <VerticalSpeed />
            <Heading pitch={telemetryData.tiltX} roll={telemetryData.tiltY} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
