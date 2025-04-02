import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./navbar.css";

function Navbarcom({ usuarioAutenticado, setUsuarioAutenticado }) {
    const navigate = useNavigate();
    const [usuarioRol, setUsuarioRol] = useState(null); 

    useEffect(() => {
        
        const rolGuardado = localStorage.getItem("rol");
        setUsuarioRol(rolGuardado);
    }, [usuarioAutenticado]); 

    const cerrarSesion = () => {
        localStorage.removeItem("usuario");
        localStorage.removeItem("rol");
        setUsuarioAutenticado(false);
        setUsuarioRol(null);
        navigate("/");
    };

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-custom">
            <Container id='container'> 
                <Navbar.Brand  className="navbar-brand-custom">
                    <img src="./img1.png" alt="Logo" width="160" height="160" className="navbar-brand-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto me-6">
                        {usuarioAutenticado ? (
                            <>
                                <Nav.Link as={Link} to="/inicio" className="nav-link-custom">Home</Nav.Link>
                                <Nav.Link as={Link} to="/nosotros" className="nav-link-custom">Nosotros</Nav.Link>
                                {usuarioRol === "admin" && (
                                    <Nav.Link as={Link} to="/administracion" className="nav-link-custom">
                                        Administración
                                    </Nav.Link>
                                )}
                                <Nav.Link onClick={cerrarSesion} className="nav-link-custom">Cerrar Sesión</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/" className="nav-link-custom">Iniciar Sesión</Nav.Link>
                                <Nav.Link as={Link} to="/registro" className="nav-link-custom">Registro</Nav.Link>
                                <Nav.Link as={Link} to="/nosotros" className="nav-link-custom">Nosotros</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbarcom;
