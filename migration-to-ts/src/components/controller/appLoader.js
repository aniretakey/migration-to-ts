import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'c5a6e151d1bb4f8585c07acd2186fe7a',
    });
  }
}

export default AppLoader;
