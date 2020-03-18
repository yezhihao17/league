import React, { Component } from "react";
import Tabbar from "../../components/tabbar";
import "./index.scss";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillReceiveProps() {}

  render() {
    const { children } = this.props;
    return (
      <div className="page-layout">
        {children}
        <Tabbar action={this.props.action} />
      </div>
    );
  }
}

export default Layout;
