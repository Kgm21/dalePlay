import React from 'react'
import { Container, Row } from 'react-bootstrap';
import "./nosotros.css";

// datos de los miembros del grupo
const equipo = [
   {
      name: 'Karen',
      role: 'Scrun Master',
      description: 'Con un talento especial para la programación y la resolución de problemas, ella es la mente técnica detrás de Dale Play. Su capacidad para convertir líneas de código en funcionalidades que mejoran la experiencia del usuario es lo que hace posible este proyecto. Amante del cine y siempre buscando nuevas formas de innovar.',
      image: '../../public/imgNosotros/avKaren.jpg',
      bgColor: 'bg-body-secondary',
   },
   {
      name: 'Nancy',
      role: 'developer',
      description: 'Con un talento especial para la programación y la resolución de problemas, ella es la mente técnica detrás de RollingMovies. Su capacidad para convertir líneas de código en funcionalidades que mejoran la experiencia del usuario es lo que hace posible este proyecto. Amante del cine y siempre buscando nuevas formas de innovar.',
      image: '../../public/imgNosotros/avNancy.jpg',
      bgColor: 'bg-body-secondary',
   },
   {
      name: 'Enzo',
      role: 'developer',
      description: 'Con un enfoque estratégico y una visión clara, Enzo es el motor que impulsa a RollingMovies hacia adelante. Su pasión por el entretenimiento y la tecnología se traduce en cada detalle del proyecto. Enzo lidera con creatividad y entusiasmo, asegurándose de que el sitio refleje su misión de conectar a los usuarios con las mejores historias.',
      image: '../../public/imgNosotros/avEnzo.png',
      bgColor: 'bg-body-secondary',
   },
];

// componente unico nosotros
const Nosotros = () => {
  return (
   <Container className="py-5">
      <header className="text-center mb-5">
         <h2 className="pb-3 fw-bold text-center">Explora el universo de las películas con nosotros</h2>
         <p className="fs-5 text-center">
         Adéntrate en el fascinante universo del cine con 'Dale Play'. Descubre historias que inspiran, emocionan y sorprenden, mientras exploras cada rincón de la magia cinematográfica. Con nosotros, cada película es más que entretenimiento: es una experiencia que conecta el arte con la pasión por lo extraordinario.
         </p>
      </header>
      <section className="text-left">
         <h3 className="fw-bold mb-3 text-center">Conoce a los creadores de 'Dale Play'</h3>
         <p className="fs-5 text-center">
         Cada gran historia necesita un equipo excepcional, y 'Dale Play' no es la excepción. Detrás de este apasionante proyecto hay un grupo de visionarios que combinaron talento, creatividad y dedicación para dar vida a una experiencia única. Ellos no solo comparten una pasión por el cine, sino también un compromiso por conectar contigo a través de cada detalle. Te invitamos a descubrir quiénes son los arquitectos de esta maravillosa aventura cinematográfica.
         </p>
      </section>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 justify-content-center align-items-center">
         {equipo.map((member, index) => (
           <div key={index} className={`col my-4 ${member.bgColor} border border-primary rounded`}>
            <figure className="d-flex justify-content-center align-items-center text-center flex-column">
               <div className="bs_miembro_img py-2">
                  <img
                  src={member.image}
                  alt={`miembro-${member.name.toLowerCase()}`}
                  className="img-fluid rounded-circle"
                 />
               </div>
               <figcaption>
                  <h4 style={{ color: 'black', fontWeight: 'bold' }}>{member.name}</h4>
                  <h5 style={{ color: 'black', fontSize: '14px' }}>{member.role}</h5>
                  <p style={{ color: 'black' }}>{member.description}</p>
               </figcaption>
            </figure>
          </div>
         ))}
      </Row>

   </Container>
  );
};

export default Nosotros;