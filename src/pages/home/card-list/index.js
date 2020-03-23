import React, { Component } from "react";
import "./index.scss";
import veiwIcon from "../../../images/icon/view.png";
import commentIcon from "../../../images/icon/comment.png";
import agreeIcon from "../../../images/icon/agree.png";
import { withRouter } from "react-router-dom";
import { queryHeroList } from "../../../api/methods/hero";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  click(item) {
    const { id } = item;
    this.props.history.push({
      pathname: `/detail/${item.id}`,
      state: { id }
    });
  }

  // 请求列表数据
  async queryHeroList() {
    let data = await queryHeroList();
    if (data.code === 1000) {
      this.setState({
        list: data.data
      });
    }
  }

  componentDidMount() {
    this.queryHeroList();
  }

  render() {
    let { list } = this.state;
    return (
      <ul className="card-list">
        {list.map((item, index) => {
          return (
            <li
              className="card"
              key={index}
              onClick={this.click.bind(this, item)}
            >
              <h3 className="title">
                {" "}
                {item.name}（{item.nickName}）{" "}
              </h3>
              <h4
                className="sub-title"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></h4>
              <img src={item.cover} className="cover" alt="" />
              <div className="cover-data">
                <div className="data">
                  <img src={veiwIcon} className="icon" alt="" />
                  {/* <span> {item.viewer} </span> */}
                  <span>152</span>
                </div>
                <div className="data">
                  <img src={commentIcon} className="icon" alt="" />
                  {/* <span> {item.comment} </span> */}
                  <span>21</span>
                </div>
                <div className="data">
                  <img src={agreeIcon} className="icon" alt="" />
                  {/* <span> {item.agree} </span> */}
                  <span>66</span>
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
