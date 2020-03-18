import React, { Component } from "react";
import "./index.scss";
import TopNavBarPage from "../../layout/top-nav-page";
import List from "./list";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  // onChange
  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <TopNavBarPage>
        <div className="search-page">
          <div className="search-wrapper">
            <input
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              className="input"
              type="text"
              placeholder="请输入搜索内容"
              maxLength="20"
            />
          </div>
          <List val={this.state.value} />
        </div>
      </TopNavBarPage>
    );
  }
}

export default Search;
