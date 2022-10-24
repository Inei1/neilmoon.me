import React, {Component} from "react";
import "./Portfolio.css";
import ABLImage from "../resources/AutomaticBrowserLogin.PNG";
import NMMImage from "../resources/neilmoonme.PNG";

class Portfolio extends Component {

  render() {
    const activeProjects = [
      ["AutomaticBrowserLogin", "AutomaticBrowserLogin is a python program that opens up web browsers and logs in to them" +
      " automatically. It consists of two executables, the first of which is a user interface made with python's kivy" +
      " framework. The config executable is the image shown to the left, and what it does is take user input and put it" +
      " in JSON format into a file. The other executable is the one that uses selenium, and it takes the input from the" +
      " config program and uses it. Selenium opens up the web pages and finds the login boxes, then sends the username" +
      " and password to them.", "https://github.com/Inei1/AutomaticBrowserLogin"],
      ["neilmoon.me", "This is my personal website, made with React and using various frontend libraries. It is a " +
      "single-page website using React Router. I built it myself while taking inspiration from other portfolios I found online.",
      "https://github.com/Inei1/neilmoon.me"]];

    return (
      <div className={"portfolio"}>
        <h1>Active Projects</h1>
        <div className={"active-projects"}>
          {Portfolio.activeProject(activeProjects[0])}
          {Portfolio.activeProject(activeProjects[1])}
        </div>
      </div>
    );
  }

  static activeProject(project) {
    return (
      <div className={"project column"}>
        <p className={"project-title"}>{project[0]}</p>
        <p className={"project-text"}>{project[1]}</p>
        <a className={"project-link"} href={project[3]}>Source Code</a>
      </div>
    );
  }
}

export default Portfolio;
