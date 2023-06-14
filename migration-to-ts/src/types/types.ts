export type Source = {
  id: string;
  name: string;
};

export interface NewsData {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
  articles?: NewsData[];
  sources?: Source[];
}

export interface NewsStatus {
  articles?: NewsData[];
  status: string;
  totalResults: number;
  sources?: Source[];
}

export interface Endpoints {
  status: string | number;
  articles: NewsData;
  totalResults?: number;
  ok?: boolean;
  statusText?: string;
}

export type Options = {
  sources?: string | undefined;
  apiKey?: string;
};

export type Data = NewsStatus | NewsData;

export type Callback = (data: Data) => void;

export enum httpStatus {
  unauthorized = 401,
  notFound = 404,
}

export enum endpoints {
  source = 'source',
  everything = 'everything',
}
