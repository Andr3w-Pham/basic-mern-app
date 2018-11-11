import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container 
} from 'reactstrap';

class AppNavbar extends Component {
  
    state = {
      isOpen: false
    }

    toggle = () => {
      this.setState({
        // set isOpen to not this.state.isOpen so if it's closed we want to open if it's open we want it to close.
        isOpen: !this.state.isOpen
      })
    }

    render() {
      return (
        <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Shopping List</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/auth">
                  Login
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>

        </Navbar>
      </div>
      );
      
    }



  }




export default AppNavbar;