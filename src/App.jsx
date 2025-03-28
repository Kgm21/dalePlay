import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleExample from './components/navbar/navbar';
import Main_page from './components/main_page/main_image';
import CategoriasPeliculas from './components/categorias_main/main_categorias';
import Footer from "./components/footer/footer";
import { Row, Col } from 'react-bootstrap'; // Importa Row y Col

function App() {
  return (
    <>
      <CollapsibleExample />
      <div className="content">
        <Main_page />
        <CategoriasPeliculas/>
      </div>
      <Footer />
    </>
  );
}

export default App;