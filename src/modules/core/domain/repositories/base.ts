import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface BaseRepository {
  get<T, D = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T, D>>;
  post<T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
  put<T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
  delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
}
