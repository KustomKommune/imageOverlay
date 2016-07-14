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
    console.log('watermark', watermark);

    // write multiple text watermarks
    var text = watermark.text
    this.elementRef = elementRef;
    window.setTimeout(() => {
      this.selectedOverlay = 'images/save_the_kommune_circle.jpg';
    }, 1000);
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
    /*
    watermark(['images/wrench_logo.jpg', '/images/kk_logo.jpg'])
    .image(watermark.image.upperRight(0.5))
    .render()
    .then( (img) => {
      console.log('!!',img);
      this.imageResult = img[0].src;
    })
    */

  }


  resizeImage(targetImage, _width, _height) {

    var promise = new Promise( (resolve, reject) => {

      var MAX_HEIGHT = 180;
      var image = new Image();

      image.onload = () => {

        var canvas = this.elementRef.nativeElement.querySelector("#tempResizeCanvas");


        /*
        if ( image.height > _height ) {
          image.width *= _height / image.height;
          image.height = _height;
        }
        */
        if ( image.width > _width ) {
          image.height *= _width / image.width;
          image.width = _width;
        }

        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
        
        console.log('ctx', ctx);
        //resolve(ctx);
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
        console.log('here!');
        this.resizeImage(e.target['result'], 180, 180).then((_image) => {
          console.log('new image format ', _image);
          this.resizedSourceImage = _image;
          console.log('before ', this.selectedOverlay);
          this.resizeImage(this.selectedOverlay, 180, 180).then((_overlay) => {
            console.log('after ', this.selectedOverlay);
            this.resizedOverlay = _overlay;
            this.updateResult();
          });
          
        });
        /*
        this.sourceImage = e.target['result'];
        console.log('updateSourceImage', this);
        this.updateResult();
        */
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
    //console.log('just before ', this.resizedSourceImage);
    watermark([this.resizedSourceImage, this.resizedOverlay])
    
      .image(watermark.image.center(0.5))
      .render()
      
      /*
      .image(function(a, b){
        console.log('image2 functions ', a, b);
        b.width = 180;
        b.height = 180;
        console.log(b.width, b.height);
        return [a, b];
      })
      */
      //.render()
      .then( (img) => {
        console.log('!!',img);
        this.imageResult = img[0].src;
      })
  }
}
