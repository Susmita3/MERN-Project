import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HiShoppingCart, HiUser } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">BeautyPro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#cart">
                <HiShoppingCart />
                &nbsp; CART
              </Nav.Link>
              <Nav.Link href="#signin">
                <HiUser />
                &nbsp; SIGNIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
