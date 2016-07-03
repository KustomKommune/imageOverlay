import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ImageOverlayAppComponent, environment } from './app/';
import 'watermarkjs';

if (environment.production) {
  enableProdMode();
}

bootstrap(ImageOverlayAppComponent);
