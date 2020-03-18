import React, { Component } from "react";
import "./index.scss";
import veiwIcon from "../../../images/icon/view.png";
import commentIcon from "../../../images/icon/comment.png";
import agreeIcon from "../../../images/icon/agree.png";
import { withRouter } from "react-router-dom";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          title: "这是标题",
          subtitle: "这是副标题",
          cover:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
          comment: 50,
          viewer: 100,
          agree: 10,
          id: 1
        },
        {
          title: "这是标题2这是标题2这是标题2这是标题2这是标题2这是标题2",
          subtitle:
            "这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题",
          cover:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
          comment: 50,
          viewer: 100,
          agree: 10,
          id: 2
        },
        {
          title: "这是标题3",
          subtitle: "这是副标题",
          cover:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
          comment: 50,
          viewer: 100,
          agree: 10,
          id: 3
        }
      ]
    };
  }

  click(item) {
    const { id } = item;
    this.props.history.push({
      pathname: `/detail/${item.id}`,
      state: { id }
    });
  }

  render() {
    return (
      <ul className="card-list">
        {this.state.list.map((item, index) => {
          return (
            <li
              className="card"
              key={index}
              onClick={this.click.bind(this, item)}
            >
              <h3 className="title"> {item.title} </h3>
              <h4 className="sub-title"> {item.subtitle} </h4>
              <img src={item.cover} className="cover" alt="" />
              <div className="cover-data">
                <div className="data">
                  <img src={veiwIcon} className="icon" alt="" />
                  <span> {item.viewer} </span>
                </div>
                <div className="data">
                  <img src={commentIcon} className="icon" alt="" />
                  <span> {item.comment} </span>
                </div>
                <div className="data">
                  <img src={agreeIcon} className="icon" alt="" />
                  <span> {item.agree} </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default withRouter(CardList);
