import React, { Component } from "react";
import TopNavBarPage from "../../layout/top-nav-page";

class _404 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "出错了"
    };
  }
  render() {
    return <TopNavBarPage title={this.state.title}>页面丢失了！</TopNavBarPage>;
  }
}

export default _404;
