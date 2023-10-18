import {$host} from './index';

export const getPokemon = async (name) => {
    const {data} = await $host.get(name);
    return data
}

