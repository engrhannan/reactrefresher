import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

class NavMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false  }
        this.toggle = this.toggle.bind(this);


    }

    toggle() {
        this.setState({ isOpen: !this.state.IsOpen });
    }

    render() {
        return <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/gettodos">To Dos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/getposts">Posts</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/getusers">Users</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    }


}

export default NavMenu