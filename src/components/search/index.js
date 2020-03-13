import React, {Component} from 'react'
import './index.scss'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      placeholder: '请输入搜索内容'
    }
  }

  render () {
    return (
      <div className="search">
        <div className="tip">{this.state.placeholder}</div>
      </div>
    )
  }
}

export default Search