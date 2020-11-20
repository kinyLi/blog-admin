import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { baseURL, accessToken } from 'config';

function $axios(options: AxiosRequestConfig): Promise<unknown> {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            ...options,
            baseURL,
        });

        // 发送前拦截
        instance.interceptors.request.use((config) => {
            const newConfig = config;
            // 发送前检查本地token,存在则携带
            if (accessToken) {
                newConfig.headers.accessToken = accessToken;
            }
            return newConfig;
        });

        // 获取数据后拦截
        instance.interceptors.response.use(
            (response): AxiosResponse => {
                // 兼容IE9
                const data = response.data ? response.data : response.request.responseText;

                // 后端约定处理
                // switch (data.code) {
                //     case '':
                //         break;
                //     default:
                // }
                return data;
            },
            (error) => {
                // 失败态处理
                // if (error && error.response) {
                //     switch (error.response.status) {
                //     }
                // }
                return Promise.reject(error);
            },
        );
        instance(options)
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export default $axios;
