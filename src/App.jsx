import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcom from "./components/navbar/navbar";
import Nosotros from "./paginas/nosotros/nosotros";
import Footer from "./components/footer/footer";
import Inicio from "./paginas/inicio/inicio";
import Administracion from "./paginas/administracion/administracion";
import Registro from "./paginas/registro/registro";
import Contacto from "./paginas/contacto/contacto";
import IniciarSesion from "./paginas/IniciarSesion/iniciarSesion";
import DetallePelicula from "./paginas/DetallePelicula/detallePelicula";
function App() {
  return (
    <>
      <Navbarcom />

      <BrowserRouter>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/administracion" element={<Administracion />} />
          <Route path="/detallepelicula" element={<DetallePelicula />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
