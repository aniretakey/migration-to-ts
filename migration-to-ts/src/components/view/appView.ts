import News from './news/news';
import Sources from './sources/sources';
import { Data, Source, NewsData } from '../../types/types';

export class AppView {
  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: Data): void {
    const values: NewsData[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: Data): void {
    const values: Source[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
