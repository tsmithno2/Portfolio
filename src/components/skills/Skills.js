import React, { useState, useEffect, Component } from "react";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <div className="SkillsFull">
        <div classNamer="SkillDescrip">
          <div classNamer="SDCard"></div>
        </div>
        <div classNamer="SkillsCards">
          <div classNamer="C#Card"></div>
          <div classNamer="JSCard"></div>
          <div classNamer="BackendCard"></div>
          <div classNamer="OtherCard"></div>
        </div>
      </div>
    );
  }
}

export default Skills;
