import React from 'react';
import {Outlet } from 'react-router-dom';
import "./app.css";
export default function Layout() {
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <h1>Logo</h1>
        </div>
        <div className='rutas'>
          <a href='#'>Anime</a>
          <a href='#'>Serie</a>
          <a href='#'>Terror</a>
        </div>
        <div className='buscar'>
          <input className='buscar' type='search' placeholder='Buscar'></input>
        </div>

      </div>
      
      <Outlet />

    </>
  );
}
