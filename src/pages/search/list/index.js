import React, { Component } from "react";
import "./index.scss";
import { withRouter } from "react-router-dom";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // list
  listDom() {
    return (
      <div className="list">
        {this.props.list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={this.toDetail.bind(this, item)}
              className="item"
            >
              {item.name}
            </li>
          );
        })}
      </div>
    );
  }

  // empty
  emptyDom() {
    return <div className="empty">暂无内容</div>;
  }

  // 跳转至详情
  toDetail(item) {
    let pagePath = this.props.type === 1 ? "material-detail" : "detail";
    this.props.history.push({
      pathname: `/${pagePath}/${item.id}`,
      state: {
        id: item.id
      }
    });
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  // }

  render() {
    let { list } = this.props;
    if (list.length > 0) {
      return <div className="list-wrapper">{this.listDom()}</div>;
    } else {
      return <div className="list-wrapper">{this.emptyDom()}</div>;
    }
  }
}

export default withRouter(List);
