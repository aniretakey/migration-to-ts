export type Source = {
  id: string | null;
  name: string;
};

export interface NewsData {
  author: string | null;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string | null;
  articles?: NewsData[];
  sources?: Source[];
}

export interface NewsStatus {
  articles?: NewsData[];
  status: APIErrorResponse | APIErrorResponse;
  totalResults: number;
  sources?: Source[];
}

export type Data = NewsStatus | NewsData;

export enum httpStatus {
  unauthorized = 401,
  notFound = 404,
}

export enum endpoints {
  source = 'sources',
  everything = 'everything',
}

export enum httpMethods {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

enum status {
  ok = 'ok',
  error = 'error',
}

export type APIErrorResponse = {
  status: status.error;
  code: string;
  message: string;
};

export type APISuccessfulResponse = {
  status: status.ok;
};

export type Callback<T> = (data: T) => void;
