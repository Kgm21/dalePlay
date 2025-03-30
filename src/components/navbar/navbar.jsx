import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


function Navbarcom() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-custom">

      <Container id='container' > 
        <Navbar.Brand href="/inicio" className="navbar-brand-custom">
            <img src="./img1.png" alt="Logo" width="160" height="160" className="navbar-brand-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-6">
              <Nav.Link href="/inicio" className="nav-link-custom">Inicio</Nav.Link>
              <Nav.Link href="/iniciarSesion" className="nav-link-custom">Iniciar Sesión</Nav.Link>
              <Nav.Link href="/registro" className="nav-link-custom">Registro</Nav.Link>
              <Nav.Link href="/administracion" className="nav-link-custom">Administración</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>

     
      <style jsx>{`
        @media (max-width: 991px) { 
          .navbar-nav {
            text-align: center !important; 
            margin: 0 auto !important; 
            display: flex;
            justify-content: center;
            flex-direction: column; 
            padding: 10px 0; 
          }
          .nav-link {
            margin: 5px 0 !important; 
          }
        }
        @media (max-width: 768px) {
          .navbar-brand {
            top: 10px !important; 
          }
          .navbar-brand img {
            width: 120px !important; 
            height: 120px !important;
            margin-right: 30px;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default Navbarcom;