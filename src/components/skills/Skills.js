import React, { useState, useEffect, Component } from "react";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <div className="SkillsFull">
        <div className="SkillDescrip">
          <div className="SDCard"></div>
        </div>
        <div className="SkillsCards">
          <div className="C#Card"></div>
          <div className="JSCard"></div>
          <div className="BackendCard"></div>
          <div className="OtherCard"></div>
        </div>
      </div>
    );
  }
}

export default Skills;
