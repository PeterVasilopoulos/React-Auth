import React, { useState } from 'react';
import axios from "axios";

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState(null);

    const fetchPokemonThen = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(jsonResponse => {
                setPokemon(jsonResponse);
            })
            .catch(err => console.log(err));
    }

    const fetchPokemonAwait = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/snorlax");
            const jsonResponse = await response.json();
            setPokemon(jsonResponse);
        } catch (err) {
            console.log(".catch")
            setPokemon(null);
        }
    }

    const fetchPokemonAxiosThen = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/eevee")
            .then(response => {
                setPokemon(response.data)
            })
            .catch(err => console.log(err))
    }

    const fetchPokemonAxiosAwait = async() => {
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
            setPokemon(response.data)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <h1> Pokemon demo</h1>
            <button onClick={fetchPokemonThen}> Fetch pokemon with Fetch/.then</button>
            <button onClick={fetchPokemonAwait}> Fetch pokemon with Fetch/await</button>
            <button onClick={fetchPokemonAxiosThen}> Axios fetch pokemon with .then</button>
            <button onClick={fetchPokemonAxiosAwait}> Axios fetch pokemon with Await</button>

            {
                pokemon ?
                    <div>
                        <h1>{pokemon.name} </h1>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div> :
                    <h1> Let's fetch a pokemon!</h1>
            }

        </div>
    )
}

export default FetchPokemon