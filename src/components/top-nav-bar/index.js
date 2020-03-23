import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.scss";

class topNavBar extends Component {
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = {
      title: title || "标题"
    };
  }

  // 返回
  back() {
    this.props.history.goBack();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title
    });
  }

  render() {
    return (
      <div className="top-nav-bar">
        <div className="left-bar" onClick={this.back.bind(this)}>
          返回
        </div>
        <div className="center-bar">{this.state.title}</div>
        <div className="right-bar">···</div>
      </div>
    );
  }
}

export default withRouter(topNavBar);
