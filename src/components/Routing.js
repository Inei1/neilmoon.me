import {Route} from "react-router-dom";
import Portfolio from "../tabs/Portfolio";
import {Switch} from "react-router";
import React from "react";
import Home from "../tabs/Home";

export default () =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path={"/portfolio"} component={Portfolio}/>
  </Switch>
