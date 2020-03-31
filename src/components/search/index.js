import React, { Component } from "react";
import "./index.scss";
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "请输入搜索内容"
    };
  }

  render() {
    return (
      <div className="search">
        <Link to={{
          pathname: "/search",
          state: {
            type: this.props.type
          }
        }} className="tip">{this.state.placeholder}</Link>
      </div>
    );
  }
}

export default Search;
