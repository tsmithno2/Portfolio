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
      >
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="justify-content-end" activeKey="/home">
            <ReactBootStrap.Nav.Item>Home</ReactBootStrap.Nav.Item>
            <ReactBootStrap.Nav.Item>Skills</ReactBootStrap.Nav.Item>
            <ReactBootStrap.Nav.Item>Experience</ReactBootStrap.Nav.Item>
            <ReactBootStrap.Nav.Item>Contact</ReactBootStrap.Nav.Item>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Header;
