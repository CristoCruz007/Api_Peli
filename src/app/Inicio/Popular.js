import React, { useEffect, useState } from 'react'


const Api = 'https://api.themoviedb.org/3/discover/movie?api_key=1ba680fc2095f62f10f3934aa6bbc8a4&language=es-MX&page=1&with_genres=18';



export default function Popular() {
    const [peliculaPopular, setPeliculaPopular] = useState([]);
    useEffect(()=> {
        fetch(Api)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setPeliculaPopular(data.results);
            })
            .catch((error) => {
                console.error("Error de los datos: ", error);
            })
    },[])
  return (
    <div className='peli'>
        <h1>Popular</h1>
        <div className='contenidos'>
            <ul className='peliculas-list'>
                {peliculaPopular.map((pelicula)=>(
                     <li key={pelicula.id} className='pelicula-item'>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                            alt={pelicula.title}
                            className='pelicula-poster'
                        />
                        <p className='pelicula-title'>{pelicula.title}</p>
                     
                    </li>
                ))}
               
            </ul>
        </div>
    </div>
  )
}
