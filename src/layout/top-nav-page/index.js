import React, { Component } from "react";
import TopNavBar from "../../components/top-nav-bar";
import "./index.scss";

class TopNavBarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div className="top-nav-bar-page">
        <TopNavBar title={this.state.title} />
        <div className="top-nav-bar-page-content">{children}</div>
      </div>
    );
  }
}

export default TopNavBarPage;
