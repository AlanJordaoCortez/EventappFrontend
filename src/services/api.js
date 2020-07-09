import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/calendar/api/v1.0'
});

export default api;
