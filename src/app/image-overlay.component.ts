import { Component, ElementRef, Inject } from '@angular/core';
import { ImagePlacementComponent } from './image-placement';
import { RangeSliderComponent } from './range-slider';
import 'watermarkjs';


//import {MdToolbar} from '@angular2-material/toolbar';
//import {MdButton} from '@angular2-material/button';
//import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
//import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
//import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
//import {MdInput} from '@angular2-material/input';
//import {MdCheckbox} from '@angular2-material/checkbox';
//import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
//import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

//import * as watermark from '';
//Place this at the top near your imports
//import 'watermarkjs';// from 'watermarkjs';
//var watermark = watermarkjs;
declare var watermark;

@Component({
  moduleId: module.id,
  selector: 'image-overlay-app',
  templateUrl: 'image-overlay.component.html',
  styleUrls: ['image-overlay.component.css'],
  directives: [ImagePlacementComponent, RangeSliderComponent]
})



export class ImageOverlayAppComponent {
  title = 'Kustom Profile Pic';
  elementRef;
  sourceImage;
  resizedSourceImage;
  imageResult;
  selectedOverlay;// = 'images/save_the_kommune_circle.jpg';
  resizedOverlay;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {

    var text = watermark.text
    this.elementRef = elementRef;
    window.setTimeout(() => {
      this.selectedOverlay = 'images/save_the_kommune_circle.jpg';
    }, 1000);

  }


  resizeImage(targetImage, _width, _height) {

    var promise = new Promise( (resolve, reject) => {

      var MAX_HEIGHT = 180;
      var image = new Image();
      console.log('target image ', targetImage);
      if (!targetImage) {
        
        image.src = '';
        var canvas = this.elementRef.nativeElement.querySelector("#tempResizeCanvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        resolve();
      }

      image.onload = () => {

        /**
         * Temp image
         */
        var canvas = this.elementRef.nativeElement.querySelector("#tempResizeCanvas");

        if ( image.width > _width ) {
          image.height *= _width / image.width;
          image.width = _width;
        }

        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);

        resolve(canvas.toDataURL("image/png"));

      };

      image.src = targetImage;

    });

    return promise;

  }

  showFileSelector(){
    let elem = this.elementRef.nativeElement.querySelector('#file_input');
    let event = new Event('click');
    elem.dispatchEvent(event);
  }
  
  updateSourceImage (event) {

    let reader = new FileReader();
    reader.onload = (e) => {
      if (e.target['readyState'] && e.target['readyState'] == 2) {
        this.resizeImage(e.target['result'], 180, 180).then((_image) => {
          this.resizedSourceImage = _image;
          this.resizeImage(this.selectedOverlay, 180, 180).then((_overlay) => {
            this.resizedOverlay = _overlay;
            console.log('calling with null ');
            this.resizeImage(null, null, null);
            this.updateResult();
          });
          
        });
      }
    };

    reader.readAsDataURL(event.target.files[0]);

  }

  updateResult() {
    watermark([this.resizedSourceImage, this.resizedOverlay])
      .image(watermark.image.center(0.5))
      .render()
      .then( (img) => {
        this.imageResult = img[0].src;
      })
  }
}
