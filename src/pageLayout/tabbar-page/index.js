import React, { Component } from 'react';
import Tabbar from '../../components/tabbar'

class PageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { children } = this.props
    return (
      <div>
        {children}
        <Tabbar />
      </div>
    );
  }
}
 
export default PageLayout;