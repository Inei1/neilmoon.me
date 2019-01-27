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
      " and password to them.",
      ABLImage, "https://github.com/Inei1/AutomaticBrowserLogin"],
      ["neilmoon.me", "This is my personal website, made with React and using various frontend libraries. It is a " +
      "single-page website using React Router. I built it myself while taking inspiration from other portfolios I found online.",
      NMMImage, "https://github.com/Inei1/neilmoon.me"]];

    const discontinuedProjects = [
      ["Android Calculator", "Old calculator app from high school, mistakes were made and learned from since.",
        "https://github.com/Inei1/CalculatorAndroidApp"],
      ["Minecraft Mod", "A Minecraft mod from high school, the reason this project was discontinued is because it got" +
      " too difficult for my inexperience at the time.",
        "https://github.com/Inei1/AdditionalOres"],
      ["Idle Game", "An idle game from Summer 2017. Ultimately unfinished because of extreme feature creep and some" +
      "really bad code. May be revisited or even finished in the future.", "https://github.com/Inei1/EvolvingCivilizationsIdle"]];
    return (
      <div className={"portfolio"}>
        <h1>Active Projects</h1>
        <div className={"active-projects"}>
          {Portfolio.activeProject(activeProjects[0])}
          {Portfolio.activeProject(activeProjects[1])}
        </div>
        <h1>Incomplete projects</h1>
        <div className={"discontinued-projects row"}>
          {Portfolio.incompleteProject(discontinuedProjects[0])}
          {Portfolio.incompleteProject(discontinuedProjects[1])}
          {Portfolio.incompleteProject(discontinuedProjects[2])}
        </div>
      </div>
    );
  }

  static activeProject(project) {
    return (
      <div className={"project column"}>
        <div className={"project-image"}>
          <img src={project[2]} className={"project-image"} alt={""}/>
        </div>
        <p className={"project-title"}>{project[0]}</p>
        <p className={"project-text"}>{project[1]}</p>
        <a className={"project-link"} href={project[3]}>Source Code</a>
      </div>
    );
  }

  static incompleteProject(project) {
    return (
      <div className={"discontinued-project"}>
        <p className={"project-title-small"}>{project[0]}</p>
        <p className={"project-text-small"}>{project[1]}</p>
        <a className={"project-link-small"} href={project[2]}>Source Code</a>
      </div>
    );
  }
}

export default Portfolio;
