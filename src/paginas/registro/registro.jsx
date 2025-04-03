import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./registro.css"; // Crea este archivo para estilos personalizados


const Registro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Validar el formulario
  const validateForm = () => {
    const newErrors = {};

    // Nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    } else if (formData.nombre.length < 4) {
      newErrors.nombre = "El nombre debe tener al menos 4 caracteres";
    }

    // Username
    if (!formData.username.trim()) {
      newErrors.username = "El usuario es requerido";
    } else if (formData.username.length < 4) {
      newErrors.username = "El usuario debe tener al menos 4 caracteres";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    // Contraseña
    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    // Confirmar contraseña
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Debes confirmar la contraseña";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulación de envío al administrador (sin EmailJS)
      console.log("Datos del nuevo usuario:", formData);

        // Simulación sin EmailJS
        setSuccess(true);
        setFormData({
          nombre: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setTimeout(() => navigate("/"), 2000); 
      }
    };
  
    return (
      <Container className="container-registro">
        <Row className="d-flex justify-content-start">
          <Col md={4}>
            <div className="form-container">
              <h2 className="text-center">Registro</h2>
              {success && (
                <Alert variant="success">
                  ¡Registro exitoso! Serás redirigido al inicio de sesión.
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    isInvalid={!!errors.nombre}
                    required 
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.nombre}
                  </Form.Control.Feedback>
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su usuario"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                    required 
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    required 
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    required 
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirme su contraseña"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                    required 
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>
  
                {errors.submit && <Alert variant="danger">{errors.submit}</Alert>}
  
                <Button variant="primary" type="submit" className="w-100">
                  Registrarse
                </Button>
              </Form>
  
              <div className="text-center mt-3">
                <p className="form-label">
                  ¿Ya tienes cuenta?{" "}
                  <Link to="/" className="text-decoration-none">
                    Inicia sesión aquí
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Registro;