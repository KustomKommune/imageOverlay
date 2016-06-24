export class ImageOverlayPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('image-overlay-app h1')).getText();
  }
}
