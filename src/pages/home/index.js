import React, { Component } from "react";
import "./index.scss";
import PageLayout from "../../pageLayout/tabbar-page";
import Search from "../../components/search";
import CardList from "./card-list/index";

class Home extends Component {
  render() {
    return (
      <PageLayout className="home">
        <Search></Search>
        <CardList></CardList>
      </PageLayout>
    );
  }
}

export default Home;
