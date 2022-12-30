import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: ` Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
    },
});
