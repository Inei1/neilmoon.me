import React, {Component} from "react";
import "./Home.css";
import {Button, ButtonToolbar} from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className={"home"}>
        <p className={"home-name"}>Neil Moon</p>
        <p className={"home-title"}>Software Engineer</p>
        <p className={"home-about"}>I'm currently a software engineer at Google. I've been here for about two and a half years, 
        where I've worked on a variety of projects. Some examples include developing a system to create backend reports for an
        integration test and contributing to a SQL pipline used to determine prices of hardware in Google datacenters.</p>
        <Button href={"mailto:neilrmoon@gmail.com"} className={"email-button"}>Send an email</Button>
        <ButtonToolbar className={"resume-buttons"}>
          <Button className={"resume-button"} bsSize={"large"}
                  href={"https://drive.google.com/file/d/1t4eUCDwdbaY1pJnk4ahAmJr4U8fmjeI-/view?usp=sharing"}
                  bsStyle={"primary"}>Download resume as pdf</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Home;
