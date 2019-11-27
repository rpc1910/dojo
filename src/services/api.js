import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonbox.io/box_8bad98a0eb85d0d84072',
})

export default api;