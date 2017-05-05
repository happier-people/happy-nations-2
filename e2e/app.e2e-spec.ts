import { HappyNationsPage } from './app.po';

describe('happy-nations App', () => {
  let page: HappyNationsPage;

  beforeEach(() => {
    page = new HappyNationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
