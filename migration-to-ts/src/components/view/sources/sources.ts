import './sources.css';
import { safeQuerySelector } from '../news/news';
import { Source } from '../../../types/types';

class Sources {
  public draw(data: Source[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    if (!sourceItemTemp) {
      throw new Error('Element #newsItemTemp not found');
    }

    data.forEach((item) => {
      const sourceClone: Node = sourceItemTemp.content.cloneNode(true);

      if (!(sourceClone instanceof HTMLElement)) {
        safeQuerySelector<HTMLSpanElement>('.source__item-name').textContent = item.name;
        safeQuerySelector<HTMLDivElement>('.source__item').setAttribute('data-source-id', item.id);
      }

      fragment.append(sourceClone);
    });
  }

  safeQuerySelector('.sources', document: Document).append(fragment: DocumentFragment);
  // document.querySelector('.sources').append(fragment);
}

export default Sources;
