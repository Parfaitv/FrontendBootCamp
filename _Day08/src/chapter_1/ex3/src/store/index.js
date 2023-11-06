import {configureStore} from '@reduxjs/toolkit';
import pokemonArrayReducer from './pokemonArraySlice';

export default configureStore({
    reducer: {
        pokemons: pokemonArrayReducer,
    },
});