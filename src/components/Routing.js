import { Route } from "react-router-dom";
import { Switch } from "react-router";
import React from "react";
import Home from "../tabs/Home";
import Portfolio from "../tabs/Portfolio";
import Experience from "../tabs/Experience";

export default () =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path={"/experience"} component={Experience} />
    <Route path={"/portfolio"} component={Portfolio} />
  </Switch>
