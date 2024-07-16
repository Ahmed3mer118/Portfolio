import React, { useState } from "react";
import "../App.css";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuopen] = useState(false);
  const showNabar = () => {
    setMenuopen(!menuOpen);
    console.log("done");
  };

  return (
    <header>
      <div className="container ">
        <h1 className="text-light">Ahmed Amer</h1>
        <ul className={menuOpen ? "responsive nav" : "nav"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-light">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/projects" className="nav-link text-light">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link text-light">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="#" className="nav-link text-light">
              Contact Me
            </NavLink>
          </li>
        </ul>
        <button className="btn btn-dark" onClick={showNabar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
