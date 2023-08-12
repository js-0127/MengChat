import axios from 'axios'
import { AxiosInstance } from 'axios'
const baseUrl = import.meta.env.VITE_APP_BASE_API
const instance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000
})

// 2. 请求拦截器，携带token 
instance.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        return err
    }
)

// 3. 响应拦截器，剥离无效数据，401拦截
instance.interceptors.response.use(
    (res) => {
        if (res.data.code === 400) {
            console.log(res.data.message);

        }
        return res.data
    },
    (err) => {
        console.log(err.response.data);


    }
)

type Data<T> = {
    code: number
    message: string
    data: T
}

const request = <T>(url: string, method = 'Get', submitData?: Object) => {
    return instance.request<T, Data<T>>({
        url,
        method,
        [method.toLocaleLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}
export { baseUrl, instance, request }