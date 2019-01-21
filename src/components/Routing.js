import {Route} from "react-router-dom";
import Portfolio from "../tabs/Portfolio";
import Resume from "../tabs/Resume";
import About from "../tabs/About";
import {Switch} from "react-router";
import React from "react";
import Home from "../tabs/Home";

export default () =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path={"/portfolio"} component={Portfolio}/>
    <Route path={"/resume"} component={Resume}/>
    <Route path={"/about"} component={About}/>
  </Switch>
