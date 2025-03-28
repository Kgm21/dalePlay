import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './main_categorias.css';
import peliculasData from './peliculas.json';

function CategoriasPeliculas() {
  useEffect(() => {
    const tarjetasPelicula = document.querySelectorAll('.tarjeta-pelicula');

    tarjetasPelicula.forEach((tarjeta) => {
      tarjeta.addEventListener('mouseenter', () => {
        const titulo = tarjeta.dataset.titulo;
        const descripcion = tarjeta.dataset.descripcion;
        tarjeta.querySelector('.card-overlay-titulo').textContent = titulo;
        tarjeta.querySelector('.card-overlay-descripcion').textContent = descripcion;
        tarjeta.querySelector('.card-overlay').style.opacity = 1;
      });

      tarjeta.addEventListener('mouseleave', () => {
        tarjeta.querySelector('.card-overlay').style.opacity = 0;
      });
    });
  }, []);

  return (
    <Container fluid>
      {peliculasData.map((categoria) => (
        <div key={categoria.categoria}>
          <Row className="tarjeta-pelicula-container">
            <Col xs={12}>
              <h2>{categoria.categoria}</h2>
            </Col>
            {categoria.peliculas.map((pelicula) => (
              <Col xs={6} md={3} key={pelicula.id}>
                <div
                  className="tarjeta-pelicula"
                  data-titulo={pelicula.titulo}
                  data-descripcion={pelicula.descripcion}
                >
                  <Card>
                    <Card.Img variant="top" src={pelicula.imagen} alt={pelicula.titulo} />
                  </Card>
                  <div className="card-overlay">
                    <div className="card-overlay-titulo"></div> 
                    <div className="card-overlay-descripcion"></div> {/* Contenedor para la descripción */}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default CategoriasPeliculas;