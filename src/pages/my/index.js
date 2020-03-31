import React, { Component } from "react";
import Layout from "../../layout/tabbar-page";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setNickName } from "../../store/user/action";
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

  // 设置用户昵称
  setUserNickName() {
    let random = Math.random();
    let nickName = random > 0.5 ? "无极剑圣" : "路人甲";
    this.props.setNickName(nickName);
  }

  UNSAFE_componentWillMount() {}

  render() {
    return (
      <Layout action={this.state.tabbarAct}>
        <div className="my">
          <div className="user-info">
            <div className="avatar-wrapper">
              <img
                src={this.props.userInfo.avatar}
                alt=""
                className="avatar"
                onClick={this.setUserNickName.bind(this)}
              />
            </div>
            <div className="info-wrapper">
              <p className="name">{this.props.userInfo.nickName}</p>
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

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}

function mapDispatchToProps(dispath) {
  return {
    setNickName: data => dispath(setNickName(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(My));
