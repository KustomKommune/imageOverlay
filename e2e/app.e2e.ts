import { ImageOverlayPage } from './app.po';

describe('image-overlay App', function() {
  let page: ImageOverlayPage;

  beforeEach(() => {
    page = new ImageOverlayPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('image-overlay works!');
  });
});
