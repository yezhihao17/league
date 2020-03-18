import React, { Component } from "react";
import TopNavBarPage from "../../layout/top-nav-page";
import "./index.scss";

class MaterialDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TopNavBarPage>
        <div className="meterial-detail">
          <h3 className="name">物品名称</h3>
        </div>
      </TopNavBarPage>
    );
  }
}

export default MaterialDetail;
