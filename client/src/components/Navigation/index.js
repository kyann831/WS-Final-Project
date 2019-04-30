import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Walk Safe</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link eventKey={2} href="#videolibrary">
          Video Library
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Navigation;
