import React from 'react'
import { useEffect, useState } from 'react';

export const Busqueda = () => {


    const [personaje, setPersonaje] = useState([]);

    useEffect(() => {
        obtenerPersonaje();
    }, [])

    const obtenerPersonaje = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI('Dragon ball')}&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K`;
        const resp = await fetch(url);
        const { data } = await resp.json();


        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setPersonaje(gifs);
    }


    return (
        <div>
            <h1>Personajes</h1>
            <hr />
            {
                personaje.map(per => (

                    <div className="card" key={per.id}>
                        <img className="card-img-top" src={per.url} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{per.title}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
