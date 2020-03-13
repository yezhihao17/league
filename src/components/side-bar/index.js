import React, {Component} from 'react';
import './index.scss';

class SideBar extends Component {
  constructor () {
    super()
    this.state = {
      active: 0,
      nav: [
        '攻击',
        '防御',
        '法术',
        '辅助',
        '天赋',
        '符文',
        '哈皮',
        '下棋',
        '攻略',
        '测试',
        'ADC',
        '打野',
        '其他'
      ]
    }
  }

  handler (index) {
    this.setState({
      active: index
    })
  }

  render () {
    return (
      <div className="side-bar">
        <ul>
          {this.state.nav.map((item, index) => {
            return (
              <li key={index} className={index === this.state.active ? 'active' : ''} onClick={this.handler.bind(this, index)}>{item}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default SideBar