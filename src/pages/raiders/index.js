import React, { Component } from "react";
import Layout from "../../layout/tabbar-page";
import Search from "../../components/search";
import SideBar from "../../components/side-bar";
import "./index.scss";
import { withRouter } from "react-router-dom";
import { queryMaterialList } from "../../api/methods/material";

class Raiders extends Component {
  constructor() {
    super();
    this.state = {
      searchType: 1,
      tabbarAct: 1,
      list: []
    };
  }

  // 获取物品列表
  async queryMaterialList() {
    let data = await queryMaterialList();
    if (data.code === 1000) {
      this.setState({ list: data.data });
    }
  }

  handler(item) {
    const { id, name } = item;
    this.props.history.push({
      pathname: `/material-detail/${id}`,
      state: {
        id,
        title: name
      }
    });
  }

  UNSAFE_componentWillMount() {
    this.queryMaterialList();
  }

  render() {
    return (
      <Layout action={this.state.tabbarAct}>
        <Search type={this.state.searchType}></Search>
        <div className="content">
          <SideBar></SideBar>
          <div className="wrapper">
            <ul className="container">
              {this.state.list.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="item"
                    onClick={this.handler.bind(this, item)}
                  >
                    <img src={item.iconPath} alt="" className="img" />
                    <p>{item.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Raiders);
