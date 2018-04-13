import { GridMemoryLeakPage } from './app.po';

describe('grid-memory-leak App', () => {
  let page: GridMemoryLeakPage;

  beforeEach(() => {
    page = new GridMemoryLeakPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
