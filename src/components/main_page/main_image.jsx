import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './main_image.css';
import peliculas from '../categorias_main/peliculas.json';

const MainPage = () => {
  const peliculaDestacada = peliculas.find((p) => p.destacada === true);

  if (!peliculaDestacada) {
    return (
      <div className="main_page">
        <Container fluid>
          <Row>
            <Col md={12} className="mainPage-content">
              <h1>No hay película destacada</h1>
              <p className="description">Por favor, vuelva a intentarlo más tarde.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div
      className="main_page"
      style={{
        backgroundImage: `url("${peliculaDestacada.imagen}")`,
        
      }}
    >
      <Container fluid>
        <Row>
          <Col md={12} className="mainPage-content">
            <h1>{peliculaDestacada.nombre}</h1>
            <Button variant="primary" className="play-button">
              Reproducir
            </Button>
            <p className="description">{peliculaDestacada.descripcion}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;