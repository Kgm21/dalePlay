import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcom from "./components/navbar/Navbar";
import Nosotros from "./paginas/Nosotros/Nosotros";
import Footer from "./components/Footer/Footer";
import Inicio from "./paginas/Inicio/Inicio";
import Administracion from "./paginas/Administracion/Administracion";
import Registro from "./paginas/Registro/Registro";
import Contacto from "./paginas/Contacto/Contacto";
import IniciarSesion from "./paginas/IniciarSesion/iniciarSesion";
import Error from "./paginas/error 404/error";
import DetallePelicula from "./paginas/detallePelicula/detalle";

function App() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    setUsuarioAutenticado(!!usuario);
  }, []);

  return (
    <BrowserRouter>
      <Navbarcom
        usuarioAutenticado={usuarioAutenticado}
        setUsuarioAutenticado={setUsuarioAutenticado}
      />

      <Routes>
        <Route
          path="/"
          element={
            <IniciarSesion setUsuarioAutenticado={setUsuarioAutenticado} />
          }
        />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/administracion" element={<Administracion />} />
        <Route path="/detalle" element={<DetallePelicula />} />
        <Route path="/error" element={<Error />} />
      </Routes>

      <Footer usuarioAutenticado={usuarioAutenticado} />
    </BrowserRouter>
  );
}

export default App;
