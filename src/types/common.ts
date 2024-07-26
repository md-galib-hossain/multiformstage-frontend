export type TErrorSource = {
  path: string;
  message: string;
};

export type TErrorDetails = {
  success: boolean;
  message: string;
  errorSources: TErrorSource[];
  err: {
    statusCode: number;
  };
  stack?: string;
};

export type TError = {
  status: number;
  data: TErrorDetails;
};
export type TResponse<T> = {
  success?: boolean;
  message?: string;
  data?: T;
  error?: TError;
};