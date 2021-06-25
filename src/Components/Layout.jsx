import React from 'react';
import {Container} from 'reactstrap';
import NavMenu from './NavMenu';

export default function Layout(props) {
  return (
    <Container>
    <NavMenu />
    {props.children}
  </Container>
  )
}