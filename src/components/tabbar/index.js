import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

import './index.scss'

class Tabbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      action: 0,
      list: [
        {
          title: '故事',
          to: '/'
        }, {
          title: '攻略',
          to: '/raiders'
        }
      ]
    }
  }

  // 点击我
  clickMe (e) {
    console.log(e)
    this.setState({
      action: e
    })
  }

  // 添加选择
  addItem (item) {
    this.state.list.push(item)
    this.setState({
      list: this.state.list
    })
  }

  // // 生命周期
  // UNSAFE_componentWillMount () {
  //   console.log('将挂载阶段')
  // }

  // componentDidMount () {
  //   console.log('已挂载阶段')
  // }

  // Updation () {
  //   console.log('更新阶段')
  // }

  // componentWillUnmount () {
  //   console.log('将销毁阶段')
  // }

  // UNSAFE_componentWillReceiveProps () {
  //   console.log('将接收到props的参数')
  // }

  render () {
    return (
      <ul className="tab-bar">
        {
          this.state.list.map((item, index) => {
            return (
              <Link key={index} to={item.to} className={this.state.action === index ? 'item active' : 'item'}>{item.title}</Link>
            )
            // return <Link key={index} onClick={this.clickMe.bind(this, index)} className={this.state.action === index ? ' active' : ''}>{item}</Link>
          })
        }
      </ul>
    )
  }
}

export default Tabbar