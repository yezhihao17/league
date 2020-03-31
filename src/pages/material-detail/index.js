import React, { Component } from "react";
import TopNavBarPage from "../../layout/top-nav-page";
import "./index.scss";
import { queryMaterialDetail } from "../../api/methods/material";

class MaterialDetail extends Component {
  constructor(props) {
    super(props);
    const { id, title } = props.history.location.state;
    this.state = {
      id,
      title,
      detail: null
    };
  }

  // 获取详情
  async queryDetail() {
    let data = await queryMaterialDetail(this.state.id);
    if (data.code === 1000) {
      this.setState({
        detail: data.data
      });
    }
  }

  UNSAFE_componentWillMount() {
    this.queryDetail();
  }

  render() {
    let el = <h3>加载中...</h3>
    if (this.state.detail) {
      el = <div className="material-detail">
        <div className="section base-info">
          <img alt="" src={this.state.detail.iconPath} className="material-img" />
          <div className="info">
            <h3>{this.state.detail.name}</h3>
            <h4>{this.state.detail.plaintext}</h4>
          </div>
        </div>

        <div className="section description-wrapper">
          <p className="title">物品描述</p>
          <p
            className="desc"
            dangerouslySetInnerHTML={{
              __html: this.state.detail.description
            }}
          ></p>
        </div>

        <div className="section from-wrapper">
          <p className="title">合成物品</p>
          <ul>
            {this.state.detail.from.map((item, index) => {
              return (
                <li key={index} className="material-item">
                  <img alt="" src={item.iconPath} />
                  <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="section into-wrapper">
          <p className="title">可合成物品</p>
          <ul>
            {this.state.detail.into.map((item, index) => {
              return (
                <li key={index} className="material-item">
                  <img alt="" src={item.iconPath} />
                  <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    }

    return (
      <TopNavBarPage title={this.state.title}>
        {el}
      </TopNavBarPage>
    );
  }
}

export default MaterialDetail;
