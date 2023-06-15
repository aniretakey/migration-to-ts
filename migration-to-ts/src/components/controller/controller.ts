import AppLoader from './appLoader';
import { Callback, Endpoints, NewsStatus } from '../../types/types';

class AppController extends AppLoader {
  public getSources(callback: Callback<NewsStatus>): void {
    super.getResp(
      {
        endpoint: Endpoints.source,
      },
      callback
    );
  }

  public getNews(e: Event, callback: Callback<NewsStatus>): void {
    let { target } = e;
    const newsContainer = e.currentTarget;

    while (target !== newsContainer) {
      if (target instanceof HTMLElement) {
        if (target.classList.contains('source__item')) {
          const sourceId = target.getAttribute('data-source-id');
          if (newsContainer instanceof HTMLElement) {
            if (newsContainer.getAttribute('data-source') !== sourceId) {
              if (sourceId) {
                newsContainer.setAttribute('data-source', sourceId);
                super.getResp(
                  {
                    endpoint: Endpoints.everything,
                    options: {
                      sources: sourceId,
                    },
                  },
                  callback
                );
              }
            }
          }
          return;
        }
        target = target.parentNode;
      }
    }
  }
}

export default AppController;
