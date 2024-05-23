import React from 'react';
import Extreno from '../Extreno/Extreno';
import "./app.css";
export default function Inicio() {
  return (
    <div className='contenido'>
      <div className='pelicula'>
        <h3>Peliucla De Extreno</h3>
        <Extreno></Extreno>
      </div>
      <div className='pelicula'>
        <h3>Pelicula Mas Popular</h3>
      </div>
      <div className='pelicula'>
        <h3>Pelicula De Terror</h3>
      </div>
    </div>
  );
}
