import React, { Component } from "react";
import "./index.scss";
import Layout from "../../layout/tabbar-page";
import Search from "../../components/search";
import CardList from "./card-list/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabbarAct: 0
    };
  }

  render() {
    return (
      <Layout className="home" action={this.state.tabbarAct}>
        <Search></Search>
        <CardList></CardList>
      </Layout>
    );
  }
}

export default Home;
