import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { safeQuerySelector } from '../../helpers/dom-utils';

class App {
  private controller: AppController;
  private view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    if (document) {
      safeQuerySelector('.sources', document).addEventListener('click', (e) =>
        this.controller.getNews(e, (data) => {
          this.view.drawNews(data);
        })
      );
      this.controller.getSources((data) => {
        this.view.drawSources(data);
      });
    }
  }
}

export default App;
