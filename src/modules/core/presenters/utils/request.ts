import { AxiosError } from "axios";
import { BaseErrorEnum, BaseErrorStatusCode } from "../../domain";

export const parseErrorResponse = (response: any) => {
  if (response instanceof AxiosError) {
    throw {
      errorMessage: response?.response?.data || BaseErrorEnum.ServerError,
      data: null,
      isSuccess: false,
      statusCode: response?.response?.status || BaseErrorStatusCode.ServerError,
    };
  }

  if (response instanceof Error) {
    throw {
      errorMessage: BaseErrorEnum.ServerError,
      data: null,
      isSuccess: false,
      statusCode: BaseErrorStatusCode.ServerError,
    };
  }

  return response;
};

export const errorHandler = (
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    try {
      return await originalMethod.apply(this, args);
    } catch (error) {
      return parseErrorResponse(error);
    }
  };

  return descriptor;
};
