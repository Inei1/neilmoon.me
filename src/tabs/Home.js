import React, {Component} from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className={"Home"}>
        <div className={"lead"}>
          <p className={"lead-name"}>Neil Moon</p>
          <p className={"lead-title"}>Computer Science Student</p>
          <p className={"lead-text"}>Lorem ipsum etc</p>
        </div>
      </div>
    );
  }
}
export default Home;
