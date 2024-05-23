import React, { useEffect, useState } from 'react';

const Api = 'https://api.themoviedb.org/3/movie/now_playing?api_key=1ba680fc2095f62f10f3934aa6bbc8a4&language=es-MX&page=1';



export default function Extreno() {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        fetch(Api)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results); // Verificar que los datos sean correctos
                setPeliculas(data.results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Estrenos</h1>
            <div className='contenido'>
            <ul>
                {peliculas.map((pelicula) => (
                    <li key={pelicula.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                            alt={pelicula.title}
                            style={{ width: '200px' }}
                        />
                        <p>{pelicula.title}</p>
                    </li>
                ))}
            </ul>
            </div>
           
        </div>
    );
}
