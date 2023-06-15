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
  status: string;
  totalResults: number;
  sources?: Source[];
}

// export interface Endpoints {
//   status: string | number;
//   articles: NewsData;
//   totalResults?: number;
//   ok?: boolean;
//   statusText?: string;
// }

export type Options = {
  sources?: string;
  apiKey?: string;
};

export type Data = NewsStatus | NewsData;

export type Callback = (data: Data) => void;

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
