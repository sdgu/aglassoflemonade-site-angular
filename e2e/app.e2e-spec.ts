import { AglassoflemonadeSiteAngularPage } from './app.po';

describe('aglassoflemonade-site-angular App', () => {
  let page: AglassoflemonadeSiteAngularPage;

  beforeEach(() => {
    page = new AglassoflemonadeSiteAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
