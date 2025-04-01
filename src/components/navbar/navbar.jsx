import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

function Navbarcom() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-custom">
      <Container id='container'> 
        <Navbar.Brand href="/" className="navbar-brand-custom">
          <img src="./img1.png" alt="Logo" width="160" height="160" className="navbar-brand-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-6">
            <Nav.Link href="/" className="nav-link-custom">Iniciar Sesión</Nav.Link>
            <Nav.Link href="/registro" className="nav-link-custom">Registro</Nav.Link>
            <Nav.Link href="/nosotros" className="nav-link-custom">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcom;