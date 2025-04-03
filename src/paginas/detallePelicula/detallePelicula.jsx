import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import peliculas from "../../components/categorias_main/peliculas.json";

const DetallePelicula = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const pelicula = peliculas.find((p) => String(p.codigo) === id);



  useEffect(() => {
    if (!pelicula) {
      navigate("/error");
    }
  }, [pelicula, navigate]);

  if (!pelicula) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "Roboto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container className="py-5">
        <Row className="align-items-center text-center text-md-start">
          <Col md={4} className="mb-4 mb-md-0">
            <img
              src={"/" + pelicula.imagen}
              alt="Pelicula"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <p>{pelicula.descripcion}</p>
          </Col>
          <Col md={4}>
            <h5>Título: {pelicula.nombre}</h5>
            <p>Categoría: {pelicula.categoria}</p>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button variant="danger" href="/error">
            Ver Película
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DetallePelicula;