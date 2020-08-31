import React, { useState, useEffect, Component } from "react";
import "./Intro.css";
import { render } from "@testing-library/react";

class Intro extends Component {
  checkButtonClick() {
    console.log("Big boy works");
  }

  check2ndButtonClick() {
    console.log("Little Fella Works works");
  }

  render() {
    return (
      <div className="Intro">
        <div className="TopIntro">
          <p>Intro Top 2/3</p>
          <button
            onClick={() => {
              this.checkButtonClick();
            }}
          >
            Press me to check
          </button>
        </div>
        <div className="BottomIntro">
          <p>Intro Top 2/3</p>
          <button
            onClick={() => {
              this.check2ndButtonClick();
            }}
          >
            Press me to check
          </button>
        </div>
      </div>
    );
  }
}

export default Intro;
