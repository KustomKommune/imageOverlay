import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ImageOverlayAppComponent } from '../app/image-overlay.component';

beforeEachProviders(() => [ImageOverlayAppComponent]);

describe('App: ImageOverlay', () => {
  it('should create the app',
      inject([ImageOverlayAppComponent], (app: ImageOverlayAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'image-overlay works!\'',
      inject([ImageOverlayAppComponent], (app: ImageOverlayAppComponent) => {
    expect(app.title).toEqual('image-overlay works!');
  }));
});
