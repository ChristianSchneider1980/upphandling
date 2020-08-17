import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="custom" expand="lg" sticky="top">
      <Navbar.Brand href="#home">DU</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="Menulink" href="/">
            Hem
          </Nav.Link>
          <Nav.Link href="/OmOss">Om Oss</Nav.Link>
          <NavDropdown title="Tjänster" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Entreprenadupphandling
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Inköp</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Upphandling</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/Kontakt">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
