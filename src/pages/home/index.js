import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.scss";
import Layout from "../../layout/tabbar-page";
import Search from "../../components/search";
import CardList from "./card-list/index";
import { queryHeroList } from "../../api/methods/hero";
import { setHomeList } from "../../store/home/action";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: 0, // 搜索类型
      tabbarAct: 0,
      list: []
    };
  }

  // 请求列表数据
  async queryHeroList() {
    let data = await queryHeroList();
    if (data.code === 1000) {
      this.setState({
        list: data.data
      });

      // 设置全局数据
      this.props.setHomeList(data.data);
    }
  }

  UNSAFE_componentWillMount() {
    let { homeList } = this.props;
    if (homeList.length === 0) {
      this.queryHeroList();
    } else {
      this.setState({ list: homeList });
    }
  }

  render() {
    return (
      <Layout className="home" action={this.state.tabbarAct}>
        <Search type={this.state.searchType}></Search>
        <CardList list={this.state.list}></CardList>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeList: state.homeData.homeList
  };
}

function mapDispatchToProps(dispath) {
  return {
    setHomeList: data => dispath(setHomeList(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
