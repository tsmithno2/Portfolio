import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <ul className="NavButtons">
        <li>Home</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>About Me</li>
        <li>Contact</li>
      </ul>
      <p>Header</p>
    </div>
  );
}

export default Header;
