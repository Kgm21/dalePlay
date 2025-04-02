<<<<<<< HEAD
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
import DetallePelicula from "./paginas/DetallePelicula/DetallePelicula";

function App() {
  return (
    <>
      <Navbarcom />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/administracion" element={<Administracion />} />
          <Route path="/DetallePelicula" element={<DetallePelicula />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcom from './components/Navbar/Navbar'; 
import Nosotros from './paginas/Nosotros/Nosotros';
import Footer from './components/Footer/Footer';
import Inicio from './paginas/Inicio/Inicio';
import Administracion from './paginas/Administracion/Administracion';
import Registro from './paginas/Registro/Registro';
import Contacto from './paginas/Contacto/Contacto';
import IniciarSesion from './paginas/IniciarSesion/iniciarSesion';
import Error from './paginas/error 404/error';

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
                    path='/'
                    element={<IniciarSesion setUsuarioAutenticado={setUsuarioAutenticado} />}
                />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/registro' element={<Registro />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/administracion' element={<Administracion />} />
                <Route path='/error' element={<Error />} />
            
            </Routes>

            
            <Footer usuarioAutenticado={usuarioAutenticado} />
        </BrowserRouter>
    );
>>>>>>> 18b175bbdedcdfbcb860097887abd947ca404353
}

export default App;
