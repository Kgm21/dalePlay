import React, { useEffect, useRef} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import peliculas from '../../components/categorias_main/peliculas.json';
import './main_categorias.css';


function CategoriasPeliculas() {
  const contenedorPeliculasRefs = useRef({});
  const [desplazamientos, setDesplazamientos] = React.useState({});
  

 // Agrupar películas por categoría correctamente
 const categorias = Object.values(
  peliculas.reduce((acc, pelicula) => {
    if (!acc[pelicula.categoria]) {
      acc[pelicula.categoria] = {
        categoria: pelicula.categoria,
        peliculas: [],
      };
    }
    acc[pelicula.categoria].peliculas.push({
      id: pelicula.codigo,
      titulo: pelicula.nombre,
      imagen: pelicula.imagen,
      descripcion: pelicula.descripcion,
    });
    return acc;
  }, {})
);

  useEffect(() => {
    const tarjetasPelicula = document.querySelectorAll('.tarjeta-pelicula');

    const handleMouseEnter = (tarjeta) => () => {
      const titulo = tarjeta.dataset.titulo;
      const overlay = tarjeta.querySelector('.card-overlay');
      if (overlay) {
        const tituloElement = tarjeta.querySelector('.card-overlay-titulo');
        if (tituloElement) {
          tituloElement.textContent = titulo || '';
        }
        overlay.style.opacity = 1;
      }
    };

    const handleMouseLeave = (tarjeta) => () => {
      const overlay = tarjeta.querySelector('.card-overlay');
      if (overlay) {
        overlay.style.opacity = 0;
      }
    };

    tarjetasPelicula.forEach((tarjeta) => {
      const enterHandler = handleMouseEnter(tarjeta);
      const leaveHandler = handleMouseLeave(tarjeta);
      tarjeta.addEventListener('mouseenter', enterHandler);
      tarjeta.addEventListener('mouseleave', leaveHandler);
      tarjeta._enterHandler = enterHandler;
      tarjeta._leaveHandler = leaveHandler;
    });

    return () => {
      tarjetasPelicula.forEach((tarjeta) => {
        if (tarjeta._enterHandler) {
          tarjeta.removeEventListener('mouseenter', tarjeta._enterHandler);
        }
        if (tarjeta._leaveHandler) {
          tarjeta.removeEventListener('mouseleave', tarjeta._leaveHandler);
        }
      });
    };
  }, []);

  const getLimites = (categoria) => {
    const contenedor = contenedorPeliculasRefs.current[categoria];
    if (!contenedor || !contenedor.parentElement) {
      return { min: 0, max: 0 };
    }

    const contenedorWidth = contenedor.parentElement.offsetWidth || 0;
    const contenidoWidth = contenedor.scrollWidth || 0;
    const maxDesplazamiento = 0;
    const minDesplazamiento = contenidoWidth > contenedorWidth ? -(contenidoWidth - contenedorWidth) : 0;

    return { min: minDesplazamiento, max: maxDesplazamiento };
  };

  const moverIzquierda = (categoriaId) => {
    const { min, max } = getLimites(categoriaId);
    setDesplazamientos(prev => {
      const current = prev[categoriaId] || 0;
      let newDisplacement = current + 200;
      if (newDisplacement > max) {
        newDisplacement = min;
      }
      return {
        ...prev,
        [categoriaId]: newDisplacement
      };
    });
  };

  const moverDerecha = (categoriaId) => {
    const { min, max } = getLimites(categoriaId);
    setDesplazamientos(prev => {
      const current = prev[categoriaId] || 0;
      let newDisplacement = current - 200;
      if (newDisplacement < min) {
        newDisplacement = max;
      }
      return {
        ...prev,
        [categoriaId]: newDisplacement
      };
    });
  };

  return (
    <Container fluid>
      {categorias && Array.isArray(categorias) ? (
        categorias.map((categoria) => (
          <div key={categoria.categoria}>
            <Row>
              <Col xs={12}>
                <h2 className='text_categoria'>{categoria.categoria || 'Sin categoría'}</h2>
              </Col>
              <Col xs={12}>
                <div className="tarjeta-pelicula-container-wrapper">
                  <button
                    className="flecha-izquierda"
                    onClick={() => moverIzquierda(categoria.categoria)}
                  >
                    ←
                  </button>
                  <div
                    className="tarjeta-pelicula-container"
                    ref={(el) => (contenedorPeliculasRefs.current[categoria.categoria] = el)}
                    style={{
                      transform: `translateX(${desplazamientos[categoria.categoria] || 0}px)`
                    }}
                  >
                    {categoria.peliculas && Array.isArray(categoria.peliculas) ? (
                      categoria.peliculas.map((pelicula) => (
                        <div
                          className="tarjeta-pelicula"
                          key={pelicula.id}
                          data-titulo={pelicula.titulo}
                        >
                          <Card>
                          <Card.Img
                             variant="top"
                            src={pelicula.imagen ? `/${pelicula.imagen}` : '/images/placeholder.jpg'}
                              alt={pelicula.titulo || 'Sin título'}
                              onError={(e) => (e.target.src = '/images/placeholder.jpg')} // Fallback
                                />

                          </Card>
                          <div className="card-overlay">
                            <div className="card-overlay-titulo"></div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div>No hay películas disponibles</div>
                    )}
                  </div>
                  <button
                    className="flecha-derecha"
                    onClick={() => moverDerecha(categoria.categoria)}
                  >
                    →
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        ))
      ) : (
        <div>Error: No se pudieron cargar las categorías</div>
      )}
    </Container>
  );
}

export default CategoriasPeliculas;