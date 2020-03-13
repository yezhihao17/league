import React, { Component } from 'react';
import './index.scss';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    console.log(props)
  }
  render() {
    const { id } = this.props.location;
    return (
      <div>
        <div className="wrapper">{id}</div>
      </div>
    );
  }
}
 
export default Detail;