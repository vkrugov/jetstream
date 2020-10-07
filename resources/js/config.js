import axios from 'axios'

const api = axios.create({
    baseURL: process.env.MIX_APP_URL ? process.env.MIX_APP_URL :
        'http://jetstream/api/',
    timeout: 10000,
    params: {}
});

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
        config.headers['Content-Type'] = 'application/json';
    }
    return config;
}, function (err) {
    return Promise.reject(err)
});

export default api
