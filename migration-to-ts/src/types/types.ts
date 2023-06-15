export type Source = {
  id: string | null;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
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

export enum HttpStatus {
  unauthorized = 401,
  notFound = 404,
}

export enum Endpoints {
  source = 'sources',
  everything = 'everything',
}

export enum HttpMethods {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

enum Status {
  ok = 'ok',
  error = 'error',
}

export type APIErrorResponse = {
  status: Status.error;
  code: string;
  message: string;
};

export type APISuccessfulResponse = {
  status: Status.ok;
};

export type Callback<T> = (data: T) => void;
