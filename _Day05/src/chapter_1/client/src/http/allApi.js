import {$host} from './index'

export const allOrders = async () => {
    const {data} = await $host.get('/orders');
    return data;
}

export const createOrder = async (userId, items) => {
    const {data} = await $host.post('/orders', {items: [...items], userId,})
    return data;
}

export const allUser = async () => {
    const {data} = await $host.get('/waiters');
    return data;
}

export const allMenu = async () => {
    const {data} = await $host.get('/menu');
    return data;
}