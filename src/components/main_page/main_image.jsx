import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './main_image.css';

function MainPage() { // Cambiado a MainPage
  return (
    <div className="main_page">
      <Container fluid>
        <Row>
          <Col md={12} className="mainPage-content">
            <h1>La Casa de Papel</h1>
            <Button variant="primary" className="play-button">
              Reproducir
            </Button>
            <p className="description">Descripción breve</p>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default MainPage; // Cambiado a MainPage