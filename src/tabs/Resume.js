import React, {Component} from "react"
import {Button, ButtonToolbar} from "react-bootstrap";

class Resume extends Component {
  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle={"primary"}>download resume as pdf</Button>
          <Button bsStyle={"primary"}>download latex source of resume</Button>
        </ButtonToolbar>
      </div>
    );
  }
}
export default Resume;
