import { Callback, httpStatus, HttpMethods, NewsStatus, Endpoints } from '../../types/types';

class Loader {
  private baseLink: string;
  private options: Record<string, string>;

  constructor(baseLink: string, options: Record<string, string>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp(
    { endpoint, options = {} }: { endpoint: Endpoints; options?: Record<string, string> },
    callback: Callback<NewsStatus> = (): void => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load(HttpMethods.GET, endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === httpStatus.unauthorized || res.status === httpStatus.notFound) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      }
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: { [key: string]: string }, endpoint: Endpoints): string {
    const urlOptions = { ...this.options, ...options };

    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load(method: HttpMethods, endpoint: Endpoints, callback: Callback<NewsStatus>, options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
