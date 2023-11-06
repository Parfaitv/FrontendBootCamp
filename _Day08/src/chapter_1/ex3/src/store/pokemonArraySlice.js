import {createSlice} from '@reduxjs/toolkit';

export const pokemonArraySlice = createSlice({
    name: 'pokemonArray',
    initialState: {
        array: [], 
    },
    reducers: {
        addPokemon: (state, action) => {
            state.array.push(action.payload)
        },

        removePokemon: (state, action) => {
            state.array.splice(action.payload, 1)
        }
    }
});

export const {addPokemon, removePokemon} = pokemonArraySlice.actions;

export default pokemonArraySlice.reducer;