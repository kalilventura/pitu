import axios from 'axios';

const baseApi = (baseUrl) => {
    const api = axios.create({
        baseURL: baseUrl
    });
    return api;
}

export default baseApi;