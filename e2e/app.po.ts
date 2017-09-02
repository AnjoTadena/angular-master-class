import { browser, by, element } from 'protractor';

export class NgAngular4DefaultPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
