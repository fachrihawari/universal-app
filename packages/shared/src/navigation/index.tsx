import React from 'react'

import { Route, Router, Switch } from "./router";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";

 function Navigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
      </Switch>
    </Router>
  );
};

export default Navigation