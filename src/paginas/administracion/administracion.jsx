import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { BsStar, BsStarFill } from 'react-icons/bs';
import peliculasIniciales from '../../components/categorias_main/peliculas.json'; 
import './administracion.css';

const Administracion = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  // Cargar películas desde localStorage o usar el JSON inicial
  useEffect(() => {
    const peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas'));
    if (peliculasGuardadas && peliculasGuardadas.length > 0) {
      setPeliculas(peliculasGuardadas);
    } 
  }, []);

  // Guardar películas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }, [peliculas]);

  // Estado para el formulario del modal
  const [formData, setFormData] = useState({
    codigo: null,
    nombre: '',
    categoria: '',
    descripcion: '',
    publicada: false,
  });

  // Cargar datos en el formulario cuando editamos
  useEffect(() => {
    if (peliculaSeleccionada) {
      setFormData(peliculaSeleccionada);
    } else {
      setFormData({ codigo: null, nombre: '', categoria: '', descripcion: '', publicada: false });
    }
  }, [peliculaSeleccionada]);

  // Manejar cambios en el formulario
  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Guardar una película
  const guardarPelicula = (e) => {
    e.preventDefault();
    // Encontrar el código más alto y sumar 1 para nuevas películas
    const maxCodigo = peliculas.length > 0 ? Math.max(...peliculas.map(p => p.codigo)) : 0;
    const nuevoCodigo = peliculaSeleccionada ? peliculaSeleccionada.codigo : maxCodigo + 1;

    const nuevaPelicula = {
      ...formData,
      codigo: nuevoCodigo,
      imagen: peliculaSeleccionada ? peliculaSeleccionada.imagen : '', // Mantenemos la imagen si editamos
    };

    if (peliculaSeleccionada) {
      setPeliculas(peliculas.map(p => (p.codigo === nuevaPelicula.codigo ? nuevaPelicula : p)));
    } else {
      setPeliculas([...peliculas, { ...nuevaPelicula, destacada: false }]);
    }
    setMostrarModal(false);
    setPeliculaSeleccionada(null);
  };

  // Borrar una película
  const borrarPelicula = (codigo) => {
    setPeliculas(peliculas.filter(p => p.codigo !== codigo));
  };

  // Editar una película
  const editarPelicula = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
    setMostrarModal(true);
  };

  // Destacar una película
  const destacarPelicula = (codigo) => {
    setPeliculas(peliculas.map(p => ({
      ...p,
      destacada: p.codigo === codigo ? !p.destacada : false,
    })));
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Administración</h1>
      <Button variant="primary" className="mb-4" onClick={() => setMostrarModal(true)}>
        Agregar Nueva Película/Serie
      </Button>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Publicada</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {peliculas.map((pelicula) => (
            <tr key={pelicula.codigo} className={pelicula.destacada ? 'table-warning' : ''}>
              <td>{pelicula.codigo}</td>
              <td>{pelicula.nombre}</td>
              <td>{pelicula.categoria}</td>
              <td>{pelicula.descripcion}</td>
              <td>{pelicula.publicada ? 'Sí' : 'No'}</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-2" onClick={() => editarPelicula(pelicula)}>
                  Editar
                </Button>
                <Button variant="outline-danger" size="sm" className="me-2" onClick={() => borrarPelicula(pelicula.codigo)}>
                  Borrar
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => destacarPelicula(pelicula.codigo)}
                >
                  {pelicula.destacada ? <BsStarFill color="gold" /> : <BsStar />}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={mostrarModal} onHide={() => { setMostrarModal(false); setPeliculaSeleccionada(null); }}>
        <Modal.Header closeButton>
          <Modal.Title>{peliculaSeleccionada ? 'Editar' : 'Agregar'} Película/Serie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={guardarPelicula}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={manejarCambio}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                name="categoria"
                value={formData.categoria}
                onChange={manejarCambio}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="descripcion"
                value={formData.descripcion}
                onChange={manejarCambio}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Publicada"
                name="publicada"
                checked={formData.publicada}
                onChange={manejarCambio}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
            <Button variant="secondary" className="ms-2" onClick={() => { setMostrarModal(false); setPeliculaSeleccionada(null); }}>
              Cancelar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Administracion;