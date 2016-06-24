import { Component } from '@angular/core';
//import { watermark } from 'watermark';

@Component({
  moduleId: module.id,
  selector: 'image-overlay-app',
  templateUrl: 'image-overlay.component.html',
  styleUrls: ['image-overlay.component.css']
})
export class ImageOverlayAppComponent {
  title = 'image-overlay works!';

  constructor(){
    /*
    // write multiple text watermarks
    var text = watermark.text

    watermark(['images/wrench_logo.jpg'])
      .image(text.lowerRight('watermark.js', '48px Josefin Slab', '#fff', 0.5))
      .render()
      .image(text.upperLeft('watermark.js', '48px Josefin Slab', '#fff', 0.5, 48))
      .then(function (img) {
        document.getElementById('#preview').appendChild(img);
      });
  }
  */
}
