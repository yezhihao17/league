import React, { Component } from "react";
import "./index.scss";
import TopNavBarPage from "../../layout/top-nav-page";
import List from "./list";
import { search } from "../../api/methods/search";

class Search extends Component {
  timeout = null;
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      value: "",
      list: []
    };
  }

  // 搜索内容
  async search() {
    let { value, type } = this.state;
    let data = await search(value, type);
    if (data.code === 1000) {
      this.setState({
        list: data.data.list
      });
    }
  }

  // onChange
  onChange(e) {
    this.setState({
      value: e.target.value
    });

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      clearTimeout(this.timeout);
      this.search();
    }, 300);
  }

  UNSAFE_componentWillMount() {
    let { type } = this.props.location.state;
    this.setState({ type });
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
          <List type={this.state.type} list={this.state.list} />
        </div>
      </TopNavBarPage>
    );
  }
}

export default Search;
