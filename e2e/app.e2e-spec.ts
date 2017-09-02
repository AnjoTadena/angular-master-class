import { NgAngular4DefaultPage } from './app.po';

describe('ng-angular4-default App', () => {
  let page: NgAngular4DefaultPage;

  beforeEach(() => {
    page = new NgAngular4DefaultPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
