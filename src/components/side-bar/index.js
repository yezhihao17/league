import React, { Component } from "react";
import "./index.scss";
import { queryMaterialTags } from "../../api/methods/material";

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      nav: []
    };
  }

  // 获取tags列表
  async queryMaterialTags() {
    let data = await queryMaterialTags();
    if (data.code === 1000) {
      this.setState({ nav: data.data });
    }
  }

  handler(index) {
    this.setState({
      active: index
    });
  }

  UNSAFE_componentWillMount() {
    this.queryMaterialTags();
  }

  render() {
    return (
      <div className="side-bar">
        <ul>
          {this.state.nav.map((item, index) => {
            return (
              <li
                key={index}
                className={index === this.state.active ? "active" : ""}
                onClick={this.handler.bind(this, index)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SideBar;
