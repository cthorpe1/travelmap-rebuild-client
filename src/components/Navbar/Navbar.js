import React, { useState, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import { logout } from "../../actions/authActions";
import RegisterModal from "../auth/RegisterModal";
import LoginModal from "../auth/LoginModal";
import { connect } from "react-redux";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { isAuthenticated, user } = props.auth;

  const authLinks = (
    <Fragment>
      <NavbarBrand>{user ? `Welcome ${user.name}` : ""}</NavbarBrand>
      <NavbarBrand onClick={props.logout} href="#">
        Logout
      </NavbarBrand>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>{<RegisterModal />}</NavItem>
      <NavItem>{<LoginModal />}</NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar
        color="primary"
        dark
        expand="sm"
        className={isAuthenticated ? null : "mb-4"}
      >
        <Container>
          <NavbarBrand href="/">
            <strong>Travel Map</strong>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const actionCreators = {
  logout,
};

export default connect(mapStateToProps, actionCreators)(NavBar);
