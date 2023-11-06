import React from 'react';
import PokemonItem from './PokemonItem';


const PokemonList = ({ cardArray, removePokemon }) => {
    return (
            cardArray.map((pokemonInfo, i) => (
                <PokemonItem removePokemon={removePokemon} pokemonInfo={pokemonInfo} index={i}/>
            ))
    )
}

export default React.memo(PokemonList)
