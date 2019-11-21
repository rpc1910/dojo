import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonbox.io/box_3e9c9e47d91a9d8a321b',
})

export default api;