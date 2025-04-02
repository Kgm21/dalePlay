import React from 'react';
import { useNavigate } from 'react-router-dom';
import './error.css';

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div className='content'>
      <button className="btn-home" onClick={handleGoHome}>Volver a Inicio</button>
    </div>
  );
};

export default Error;
