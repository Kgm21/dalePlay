import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Error from "./paginas/error_404/error";
import DetallePelicula from "./paginas/detallePelicula/detallePelicula";
import peliculasIniciales from "../src/components/categorias_main/peliculas.json";

function App() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas"));
    if (peliculasGuardadas && peliculasGuardadas.length > 0) {
      setPeliculas(peliculasGuardadas);
    } else {
      setPeliculas(peliculasIniciales);
      localStorage.setItem("peliculas", JSON.stringify(peliculasIniciales));
    }

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
        <Route path="/error" element={<Error />} />
        <Route path="/detalle" element={<DetallePelicula />} />
      </Routes>

      <Footer usuarioAutenticado={usuarioAutenticado} />
    </BrowserRouter>
  );
}

export default App;
