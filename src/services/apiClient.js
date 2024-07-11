import axios from 'axios';
import { URL_API_BASE } from "./URL_API_BASE";

const apiClient = axios.create({
    baseURL: `${URL_API_BASE}`,
});

apiClient.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("jwt");
    if (token) {
        config.headers['Authorization'] = token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;
