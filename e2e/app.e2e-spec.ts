import { MyxfrontPage } from './app.po';

describe('myxfront App', () => {
  let page: MyxfrontPage;

  beforeEach(() => {
    page = new MyxfrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
