import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [hasTriedAutoconnect, setHasTriedAutoconnect] = useState(false);
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
