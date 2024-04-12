import "./Navbar.css";
import SerialProvider from "../../hooks/SerialProvider";
import SerialButton from "./SerialButton";

const Navbar = () => {
  return (
    <div className="container">
      <img className="logo-container" src="gagan.png" />
      <div className="button-container">
        <SerialProvider>
          <SerialButton />
        </SerialProvider>
      </div>
    </div>
  );
};

export default Navbar;
