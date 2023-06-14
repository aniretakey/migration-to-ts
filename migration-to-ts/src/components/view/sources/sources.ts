import './sources.css';
import { safeQuerySelector } from '../../../helpers/dom-utils';
import { Source } from '../../../types/types';

class Sources {
  public draw(data: Source[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

    if (!sourceItemTemp) {
      throw new Error('Element #sourceItemTemp not found');
    }

    data.forEach((item) => {
      const sourceClone: Node = sourceItemTemp.content.cloneNode(true);

      if (!(sourceClone instanceof DocumentFragment)) {
        throw new Error('Error: sourceClone is not instanceof DocumentFragment');
      }

      safeQuerySelector<HTMLSpanElement>('.source__item-name', sourceClone).textContent = item.name;
      if (item.id !== null) {
        safeQuerySelector<HTMLDivElement>('.source__item', sourceClone).setAttribute('data-source-id', item.id);
      }

      fragment.append(sourceClone);
    });

    safeQuerySelector<HTMLDivElement>('.sources', document).append(fragment);
  }
}

export default Sources;
