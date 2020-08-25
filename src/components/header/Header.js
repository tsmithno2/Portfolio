import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="sm"
        bg="primary"
        variant="dark"
      ></ReactBootStrap.Navbar>
    </div>
  );
}

export default Header;
