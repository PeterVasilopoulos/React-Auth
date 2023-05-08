import React, { useEffect, useState } from 'react';
import axios from "axios";

const FetchPokemonOnLoad = () => {
    const [pokemon, setPokemon] = useState(null);
    const [id, setId] = useState(1);

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response=>{
                console.log(response.data)
                setPokemon(response.data);
            })
            .catch(err=> console.log(err))
    }, [id])

    const randomIdGenerator = ()=>{
        const randomId = Math.floor(Math.random()*1200);
        setId(randomId);
    }

    return (
        <div>
            <button onClick={randomIdGenerator}> Generate a random pokemon</button>
            {
                pokemon?
                <div>
                    <h1> {pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>:
                <h1> Pokemon is not available</h1>
            }
            
        </div>
    )
}

export default FetchPokemonOnLoad