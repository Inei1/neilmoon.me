import "./Header.css";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Routing from "./Routing";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={"/"}>Neil Moon</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Text>
            <Link to={"/portfolio"}>Portfolio</Link>
          </Navbar.Text>
          <Nav>
            <NavItem eventKey={1} href={"mailto:neilrmoon@gmail.com"}>
              <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
            </NavItem>
            <NavItem eventKey={2} href={"https://github.com/Inei1"}>
              <FontAwesomeIcon icon={faGithub} size={"2x"} />
            </NavItem>
            <NavItem eventKey={3} href={"https://www.linkedin.com/in/neil-moon"}>
              <FontAwesomeIcon icon={faLinkedinIn} size={"2x"} />
            </NavItem>
          </Nav>
        </Navbar>
        <Routing />
      </div>
    );
  }
}

export default Header;
