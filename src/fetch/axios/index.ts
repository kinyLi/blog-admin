import axios, { AxiosStatic } from 'axios';
import { baseURL } from '../../config';

export default function $axios(url: string) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL,
        });
        instance.interceptors.request.use((config) => {
            return config;
        });
        instance(url)
            .then((res) => {
                resolve(res);
                return false;
            })
            .catch((error) => {
                reject(error);
            });
    });
}
