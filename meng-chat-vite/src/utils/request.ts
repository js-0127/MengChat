import axios from "axios";
import { AxiosInstance } from "axios";
import type ElMessage from "element-plus";
import { useUserStore } from "@/store/module/user";
const baseUrl = import.meta.env.VITE_APP_BASE_API;
const instance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

// 2. 请求拦截器，携带token
instance.interceptors.request.use(
  (config) => {
    const store = useUserStore()
    if (store.user?.token && config.headers) {
      config.headers['Authorization'] = `Bearer ${store.user?.token}`
    }
    return config
  },
  (err) => {
    return err;
  }
);

// 3. 响应拦截器，剥离无效数据，401拦截
instance.interceptors.response.use(
  (res) => {
    return res.data
  },

  (err) => {
    console.log(err);

    if (err.response.data.statusCode == 400) {
      //@ts-ignore
      ElMessage({
        message: err.response.data.message,
        type: 'error',
      })
    } else if (err.response.status == 401) {
      //@ts-ignore
      ElMessage({
        message: err.response.data[0].message[0],
        type: 'error',
      })
    }

  }
);

type Data<T> = {
  code: number;
  message: string;
  data: T;
};

const request = <T>(url: string, method = "Get", submitData?: Object) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    [method.toLocaleLowerCase() === "get" ? "params" : "data"]: submitData,
  });
};
export { baseUrl, instance, request };
