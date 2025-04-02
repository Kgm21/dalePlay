import { useState } from 'react';
import './inicio.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from 'react-bootstrap'; // Import necessary Bootstrap components
import MainPage from '../../components/Main_page/main_image';
import CategoriasPeliculas from '../../components/Categorias_main/main_categorias'

const Inicio = () => {
  return (
    <div className='content'>
      <MainPage />
      <CategoriasPeliculas/>

    </div>
  );
};

export default Inicio; 