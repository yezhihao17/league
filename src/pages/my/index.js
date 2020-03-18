import React, { Component } from "react";
import Layout from "../../layout/tabbar-page";
import { withRouter } from "react-router-dom";
import "./index.scss";

class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabbarAct: 2,
      layoutList: [
        {
          name: "我的资产",
          path: "/my-assets"
        },
        {
          name: "我的评论",
          path: "/my-comment"
        },
        {
          name: "历史记录",
          path: "/history-record"
        }
      ]
    };
  }

  // 跳转页面
  toPush(item) {
    this.props.history.push({
      pathname: item.path
    });
  }

  render() {
    return (
      <Layout action={this.state.tabbarAct}>
        <div className="my">
          <div className="user-info">
            <div className="avatar-wrapper">
              <img
                src="https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg"
                alt=""
                className="avatar"
              />
            </div>
            <div className="info-wrapper">
              <p className="name">游客</p>
            </div>
          </div>
          <ul className="list-wrapper">
            {this.state.layoutList.map((item, index) => {
              return (
                <li key={index} onClick={this.toPush.bind(this, item)}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default withRouter(My);
