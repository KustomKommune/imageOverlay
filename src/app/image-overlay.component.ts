import { Component, ElementRef, Inject } from '@angular/core';
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
  directives: []
})



export class ImageOverlayAppComponent {
  title = 'Kustom Profile Pic';
  elementRef;
  sourceImage;
  imageResult;
  selectedOverlay = 'images/wrench_logo.jpg';

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    console.log('watermark', watermark);

    // write multiple text watermarks
    var text = watermark.text
    this.elementRef = elementRef;

    //var attributeName = this.elementRef.nativeElement.attributes[0].name;
    console.log('elementRef ', this.elementRef.nativeElement.attributes[0]);
    /*
    watermark(['images/wrench_logo.jpg', '/images/kk_logo.jpg'])
    //.image(watermark.image.lowerRight(0.5))
    //.render()
    .then( (img) => {

      this.imageResult = img[0].src;
      console.log('......', img[0]);//this.imageResult);
    });
    */

    watermark(['images/wrench_logo.jpg', '/images/kk_logo.jpg'])
    .image(watermark.image.upperRight(0.5))
    .render()
    .then( (img) => {
      console.log('!!',img);
      this.imageResult = img[0].src;
    })

  }


  resizeImage(targetImage) {

    var promise = new Promise( (resolve, reject) => {

      var MAX_HEIGHT = 180;
      var image = new Image();

      image.onload = () => {

        var canvas = this.elementRef.nativeElement.querySelector("#tempResizeCanvas");
        
        if ( image.height > MAX_HEIGHT ) {
          image.width *= MAX_HEIGHT / image.height;
          image.height = MAX_HEIGHT;
        }

        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
        console.log('ctx', ctx);
        resolve(ctx);

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
        console.log('here!');
        this.resizeImage(e.target['result']);
        this.sourceImage = e.target['result'];
        console.log('updateSourceImage', this);
        this.updateResult();
      }
    };

    reader.readAsDataURL(event.target.files[0]);

  }

  updateResult() {
    console.log('updateResult');
    /*
    watermark(['images/wrench_logo.jpg'])
      .image(watermark.text.lowerRight('Kustom Mother-fucking-kommune!', '48px Josefin Slab', '#fff', 0.5))
      //.image(watermark.image.lowerRight(0.5))
      .render()
      .image(watermark.text.upperLeft('Kustom Kommune!', '48px Josefin Slab', '#fff', 0.5, 48))
      .then( (img) => {
        this.imageResult = img.src;
      });
    */
   /*
    watermark(['images/wrench_logo.jpg'])//, '/images/kk_logo.jpg'])
    .image(watermark.image.lowerRight(0.5))
    .then( (img) => {

      this.imageResult = img.src;
      console.log('......', this.imageResult);
    });
    */
    watermark([this.sourceImage, this.selectedOverlay])
    /*
      .image(watermark.image.center(0.2))
      .render()
      */
      .image(function(a, b){
        console.log('image2 functions ', a, b);
        b.width = 180;
        b.height = 180;
        console.log(b.width, b.height);
        return [a, b];
      })

      .render()
      .then( (img) => {
        console.log('!!',img);
        this.imageResult = img[0].src;
      })
  }
}
