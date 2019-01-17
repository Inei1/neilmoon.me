import {Nav, Navbar, NavItem} from "react-bootstrap";
import React, {Component} from "react";

export class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={"/"}>Neil Moon</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href={"/portfolio"}>
              Portfolio
            </NavItem>
            <NavItem eventKey={2} href={"/resume"}>
              Resume
            </NavItem>
            <NavItem eventKey={3} href={"/about"}>
              About
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href={"mailto:neilrmoon@gmail.com"}>
              (Email Icon)
            </NavItem>
            <NavItem eventKey={2} href={"https://github.com/Inei1"}>
              (Github Icon)
            </NavItem>
            <NavItem eventKey={3} href={"{https://www.linkedin.com/in/neil-moon"}>
              (LinkedIn Icon)
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
