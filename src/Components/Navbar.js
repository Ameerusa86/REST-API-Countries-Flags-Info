import React from "react";
import { IoSunnySharp } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="nav-title">
          <h1>Where in the world?</h1>
        </div>
        <div className="icon">
          <IoSunnySharp />
          <span>Dark Mode</span>
        </div>
      </header>
    </>
  );
};

export default Navbar;
