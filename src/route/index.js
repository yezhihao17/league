import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Detail from "../pages/detail";
import MaterialDetail from "../pages/material-detail";
import Raiders from "../pages/raiders";
import Search from "../pages/search";
import My from "../pages/my";
import MyAssets from "../pages/my-assets";
import HistoryRecord from "../pages/history-record";
import MyComment from "../pages/my-comment";
import _404 from "../pages/_404";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/material-detail" component={MaterialDetail}></Route>
        <Route path="/raiders" component={Raiders}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/my" component={My}></Route>
        <Route path="/my-assets" component={MyAssets}></Route>
        <Route path="/history-record" component={HistoryRecord}></Route>
        <Route path="/my-comment" component={MyComment}></Route>
        <Route component={_404}></Route>
      </Switch>
    </Router>
  );
}

export default Routes;
