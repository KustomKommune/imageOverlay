import { Component, ElementRef, Inject } from '@angular/core';


import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
//import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
//import {MdInput} from '@angular2-material/input';
//import {MdCheckbox} from '@angular2-material/checkbox';
//import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
//import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

//import * as watermark from '';
//Place this at the top near your imports

declare var watermark;

@Component({
  moduleId: module.id,
  selector: 'image-overlay-app',
  templateUrl: 'image-overlay.component.html',
  styleUrls: ['image-overlay.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    //MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    //MdInput,
    //MdCheckbox,
    //MdRadioGroup,
    //MdRadioButton,
    //MdIcon
  ]
})



export class ImageOverlayAppComponent {
  title = 'image-overlay works!';
  elementRef;
  image_result;
  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    console.log('watermark', watermark);

    // write multiple text watermarks
    var text = watermark.text
    this.elementRef = elementRef;
    //var attributeName = this.elementRef.nativeElement.attributes[0].name;
    console.log('elementRef ', this.elementRef.nativeElement.attributes[0]);


    watermark(['images/wrench_logo.jpg'])
      .image(text.lowerRight('Kustom Mother-fucking-kommune!', '48px Josefin Slab', '#fff', 0.5))
      .render()
      .image(text.upperLeft('Kustom Kommune!', '48px Josefin Slab', '#fff', 0.5, 48))
      .then( (img) => {
        this.image_result = img.src;
      });
  }
  
}
