import React, { Component } from "react";
import "./index.scss";
import { withRouter } from "react-router-dom";

// 本地数据
let db = [
  {
    id: 1,
    name: "安妮"
  },
  {
    id: 2,
    name: "贾克斯"
  },
  {
    id: 3,
    name: "杰克斯"
  },
  {
    id: 4,
    name: "武器大师"
  },
  {
    id: 5,
    name: "金克斯"
  },
  {
    id: 6,
    name: "皮城执法官"
  },
  {
    id: 7,
    name: "皮城女警"
  },
  {
    id: 8,
    name: "卡特琳娜"
  }
];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  // 对比搜索内容
  querySelectVal(val) {
    let arr = [];
    for (let i = 0; i < db.length; i++) {
      if (db[i].name.indexOf(val) > -1) {
        arr.push(db[i]);
      }
    }
    this.setState({
      list: arr
    });
  }

  // list
  listDom(props) {
    return (
      <div className="list">
        {this.state.list.map((item, index) => {
          return (
            <li key={index} onClick={this.toDetail.bind(this, item)} className="item">
              {item.name}
            </li>
          );
        })}
      </div>
    );
  }

  // empty
  emptyDom(props) {
    return <div className="empty">暂无内容</div>;
  }

  // 跳转至详情
  toDetail(item) {
    this.props.history.push({
      pathname: `/detail/${item.id}`,
      id: item.id
    })
  }

  componentWillReceiveProps(nextProps) {
    this.querySelectVal(nextProps.val);
  }

  render() {
    let { val } = this.props;
    let { list } = this.state;
    let noEmpty = list.length > 0 && val !== "";
    if (noEmpty) {
      return <div className="list-wrapper">{this.listDom()}</div>;
    } else {
      return <div className="list-wrapper">{this.emptyDom()}</div>;
    }
  }
}

export default withRouter(List);
