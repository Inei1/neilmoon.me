import React, {Component} from "react";
import "./Home.css";
import {Button, ButtonToolbar} from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className={"home"}>
        <p className={"home-name"}>Neil Moon</p>
        <p className={"home-title"}>Computer Science Student</p>
        <p className={"home-about"}>I'm Neil, a student in computer science at California State University, East Bay.
          I enjoy writing challenging software projects that have practical uses. My goal is to always be learning,
          whether it be new tech stacks, new programming methods, or something else entirely. A recent project of mine
          is AutomaticBrowserLogin, a tool for automatically opening and logging in to web browsers.</p>
        <p className={"home-action"}>Want to talk?</p>
        <Button href={"mailto:neilrmoon@gmail.com"} className={"email-button"}>Send an email</Button>
        <p className={"home-action"}>Looking for my resume?</p>
        <ButtonToolbar className={"resume-buttons"}>
          <Button className={"resume-button"} bsSize={"large"}
                  href={"https://drive.google.com/file/d/1J1J-e22yJ_FffszL1pYVVWe-dwbGJAhh/view?usp=sharing"}
                  bsStyle={"primary"}>Download resume as pdf</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Home;
