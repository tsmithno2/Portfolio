import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Buttons">
        <button>Home</button>
        <button>Skills</button>
        <button>Experience</button>
        <button>About Me</button>
        <button>Contact</button>
      </div>
      <p>Header</p>
    </div>
  );
}

export default Header;
