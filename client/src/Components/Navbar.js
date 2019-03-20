import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {
  Collapse,
  Container,
  Navbar as RSNavbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GET_ME } from '../queries';

export class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  navLinkClick = action => event => {
    event.preventDefault();
    if (action) {
      this.props.openForm(action);
    }
  };

  render() {
    return (
      <RSNavbar color="primary" dark expand="md" className="mb-5">
        <Container>
          <NavbarBrand href="#">בחירות 2019</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#">מה אחרים בחרו</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" onClick={this.navLinkClick('login')}>
                  כניסה &nbsp;
                  <FontAwesomeIcon icon="sign-in-alt" />
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="#" onClick={this.navLinkClick('register')}>
                  הרשמה
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </RSNavbar>
    );
  }
}

export default graphql(GET_ME)(Navbar);
