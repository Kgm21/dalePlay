import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./iniciarSesion.css";
import usuarios from "./usuarios.json";
import bcrypt from "bcryptjs";

const IniciarSesion = ({ setUsuarioAutenticado }) => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.classList.add("login-page");
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (
        usuarios[usuario] &&
        (await bcrypt.compare(contrasena, usuarios[usuario].hash))
      ) {
        const rol = usuarios[usuario].rol;

        localStorage.setItem("usuario", usuario);
        localStorage.setItem("rol", rol);

        setUsuarioAutenticado(true);

        if (rol === "admin") {
          navigate("/administracion");
        } else {
          navigate("/inicio");
        }

        setUsuario("");
        setContrasena("");
      } else {
        setError("Usuario o contraseña incorrectos.");
      }
    } catch (error) {
      setError("Error durante el inicio de sesión.");
      console.error("Error bcrypt compare:", error);
    }
  };

  return (
    <Container className="container">
      <Row className="d-flex justify-content-start">
        <Col md={4}>
          <div className="form-container">
            <h2 className="text-center">Iniciar Sesión</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formUser">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su usuario"
                  name="user"
                  required
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  required
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Iniciar Sesión
              </Button>
            </Form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="text-center mt-3">
              <p className="form-label">
                ¿No tienes cuenta?{" "}
                <Link to="/registro" className="text-decoration-none">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IniciarSesion;
