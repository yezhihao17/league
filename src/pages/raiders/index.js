import React, {Component} from 'react';
import PageLayout from '../../pageLayout/tabbar-page'
import Search from '../../components/search';
import SideBar from '../../components/side-bar';
import './index.scss';
import { withRouter } from 'react-router-dom';

class Raiders extends Component {
  constructor () {
    super()
    this.state = {
      list: [
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀',
        '我们说的呀'
      ]
    }
  }

  handler (id) {
    this.props.history.push({
      pathname: `/detail/${id}`,
      id: id
    })
  }

  render () {
    return (
      <PageLayout>
        <Search name="攻略"></Search>
        <div className="content">
          <SideBar></SideBar>
          <div className="wrapper">
            <ul className="container">
              {this.state.list.map((item, index) => {
                return (
                  <li key={index} className="item" onClick={this.handler.bind(this, index)}>
                    <img src="https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg" alt="" className="img"/>
                    <p>物品名字物品名字</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </PageLayout>
      // <div className="raiders">
      // </div>
    )
  }
}

export default withRouter(Raiders);