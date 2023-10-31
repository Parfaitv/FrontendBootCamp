import axios from 'axios';

const $host = axios.create({
    // baseURL: 'https://pokeapi.co/api/v2/pokemon'
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
})


export {$host}