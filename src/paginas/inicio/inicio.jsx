import { useState } from 'react';
import './inicio.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from 'react-bootstrap'; // Import necessary Bootstrap components
import MainPage from '../../components/main_page/main_image';
import CategoriasPeliculas from '../../components/categorias_main/main_categorias'

const Inicio = () => {
  return (
    <div className='content-main'>
      <MainPage />
      <CategoriasPeliculas/>

    </div>
  );
};

export default Inicio; 