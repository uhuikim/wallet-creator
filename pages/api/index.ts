import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
});

instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers.common['Content-Type'] =
  'application/json; charset=UTF-8';

export const postData = async <ReturnType, BodyType>(
  url: string,
  body: BodyType,
): Promise<ReturnType> => instance.post(`${url}`, body).then((res) => res.data);
