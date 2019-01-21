import {BrowserRouter as Router} from "react-router-dom";
import React, {Component} from "react";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
        </div>
      </Router>
    );
  }
}
export default App;
