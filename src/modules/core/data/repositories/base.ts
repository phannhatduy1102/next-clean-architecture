import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseRepository, POKEMON_API_URL } from "../../domain";
import { errorHandler } from "../../presenters";

const api: AxiosInstance = axios.create({
  timeout: 30000,
  baseURL: POKEMON_API_URL,
});

class BaseRepositoryImplement implements BaseRepository {
  protected api: AxiosInstance;

  constructor(enableErrorHandler: boolean) {
    this.api = api;

    if (enableErrorHandler) {
      const methodNames = Object.getOwnPropertyNames(
        BaseRepositoryImplement.prototype
      ).filter((name) => name !== "constructor");

      for (const methodName of methodNames) {
        const descriptor = Object.getOwnPropertyDescriptor(
          BaseRepositoryImplement.prototype,
          methodName
        );
        if (descriptor?.value && typeof descriptor.value === "function") {
          Object.defineProperty(
            this,
            methodName,
            errorHandler(this, methodName, descriptor)
          );
        }
      }
    }
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.api.get<T>(url, config);
  }

  post<T, D>(url: string, data?: D, config?: AxiosRequestConfig) {
    return this.api.post<T>(url, data, config);
  }

  put<T, D>(url: string, data?: D, config?: AxiosRequestConfig) {
    return this.api.put<T>(url, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.api.delete<T>(url, config);
  }
}

export const makeBaseRepository = (enableErrorHandler?: boolean) =>
  new BaseRepositoryImplement(enableErrorHandler || true);
