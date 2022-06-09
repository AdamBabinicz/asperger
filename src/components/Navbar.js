import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { RiBarChartHorizontalLine } from "react-icons/ri";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <RiBarChartHorizontalLine />
        </button>
      </div>
      <div className="links">
        <Link to="/">Start</Link>
        <Link to="/aspi">O Aspim</Link>
        <Link to="/definicja">Definicja</Link>
      </div>
    </div>
  );
}

export default Navbar;
