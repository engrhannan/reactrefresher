import React, { Component, useState } from 'react';
import {Container} from 'reactstrap';
import NavMenu from './NavMenu';

class Layout extends Component {


  constructor(props) {
    super(props);
     
  }
  render() {
    return (<Container>
      <NavMenu />
      {this.props.children}
    </Container>);
  }
}

export default Layout;