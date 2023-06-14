import './news.css';
import { NewsData } from '../../../types/types';
import imgPlaceholder from '../../../assets/img_news.jpg';

export function safeQuerySelector<T extends HTMLElement>(
  selector: string,
  parentElement: DocumentFragment | Document | HTMLElement = document
): T {
  const elem = parentElement.querySelector<T>(selector);

  if (!elem) {
    throw new Error('Element not found');
  }
  return elem;
}

class News {
  public draw(data: NewsData[] = []): void {
    const news: NewsData[] = data.length >= 10 ? data.filter((_item: NewsData, idx: number) => idx < 10) : data;
    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
    if (!newsItemTemp) {
      throw new Error('Element #newsItemTemp not found');
    }

    news.forEach((item: NewsData, idx: number) => {
      const newsClone: Node = newsItemTemp.content.cloneNode(true);

      if (!(newsClone instanceof DocumentFragment)) {
        throw new Error('Error: newsClone is not instanceof DocumentFragment');
      }
      if (idx % 2) {
        safeQuerySelector<HTMLDivElement>('.news__item', newsClone).classList.add('alt');
      }

      safeQuerySelector<HTMLDivElement>('.news__meta-photo', newsClone).style.backgroundImage = `url(${
        item.urlToImage || imgPlaceholder
      })`;
      safeQuerySelector<HTMLLIElement>('.news__meta-author', newsClone).textContent = item.author || item.source.name;
      safeQuerySelector<HTMLLIElement>('.news__meta-date', newsClone).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      safeQuerySelector<HTMLHeadingElement>('.news__description-title', newsClone).textContent = item.title;
      safeQuerySelector<HTMLHeadingElement>('.news__description-source', newsClone).textContent = item.source.name;
      safeQuerySelector<HTMLParagraphElement>('.news__description-content', newsClone).textContent = item.description;
      safeQuerySelector<HTMLLinkElement>('.news__read-more a', newsClone).setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    safeQuerySelector('.news', document).innerHTML = '';
    safeQuerySelector('.news', document).appendChild(fragment);
  }
}

export default News;
