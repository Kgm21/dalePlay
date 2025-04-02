import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcom from './components/navbar/navbar';
import Nosotros from "./paginas/nosotros/nosotros";
import Footer from "./components/footer/footer";
import Inicio from './paginas/inicio/inicio';
import Administracion from './paginas/administracion/administracion';
import Registro from './paginas/registro/registro';
import Contacto from './paginas/contacto/contacto';
import IniciarSesion from './paginas/IniciarSesion/iniciarSesion';

function App() {
    // Estado para manejar la autenticación
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);

    // Verifica si hay un usuario en localStorage al cargar la página
    useEffect(() => {
        const usuario = localStorage.getItem("usuario");
        setUsuarioAutenticado(!!usuario); // Si existe usuario, autenticado = true
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
            </Routes>

            {/* Pass usuarioAutenticado to Footer */}
            <Footer usuarioAutenticado={usuarioAutenticado} />
        </BrowserRouter>
    );
}

export default App;
