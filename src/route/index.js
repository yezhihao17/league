import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Detail from "../pages/detail";
import Raiders from "../pages/raiders";
import _404 from "../pages/_404";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/raiders" component={Raiders}></Route>
        <Route component={_404}></Route>
      </Switch>
    </Router>
  );
}

export default Routes;
