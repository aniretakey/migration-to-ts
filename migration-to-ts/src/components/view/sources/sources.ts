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
      console.log(item.name, item.id);
      const sourceClone: Node = sourceItemTemp.content.cloneNode(true);

      if (!(sourceClone instanceof DocumentFragment)) {
        throw new Error('Error: sourceClone is not instanceof DocumentFragment');
      }

      safeQuerySelector<HTMLSpanElement>('.source__item-name', sourceClone).textContent = item.name;
      safeQuerySelector<HTMLDivElement>('.source__item', sourceClone).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    safeQuerySelector<HTMLElement>('.sources', document).append(fragment);
  }
}

export default Sources;
