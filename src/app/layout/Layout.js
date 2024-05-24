import React from 'react';
import "./layout.css";

import {Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <h2>Cine AyC</h2>
        </div>
        <div className='rutas'>
          <a className="link" href='#'>Anime</a>
          <a className="link" href='#'>Serie</a>
          <a className="link" href='#'>Terror</a>
        </div>
        <div className='buscar'>
          <input className='buscar' type='search' placeholder='Buscar'></input>
        </div>

      </div>
      
      <Outlet />

    </>
  );
}
