import React, {Component} from "react";
import "./Experience.css";
import {Button, ButtonToolbar} from "react-bootstrap";

class Experience extends Component {

  render() {
    const experience = [
      ["Amazon", "Amazon stuff"],
      ["Google Engineering Residency", "ER stuff"],
      ["Google Software Engineer", "SWE stuff"]
    ];
    return (
      <div className={"experience"}>
        <p className={"experience-title"}>Experience</p>
      </div>
    );
  }

  static experienceListing(experience) {
    return (
      <div className="experience column">
        
      </div>
    );
  }
}

export default Experience;