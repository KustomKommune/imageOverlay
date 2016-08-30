import { Component, OnInit, Inject, Input, OnChanges, ElementRef} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-image-placement',
  templateUrl: 'image-placement.component.html',
  //styleUrls: ['image-placement.component/image-placement.component.css']
})



export class ImagePlacementComponent implements OnInit {

  private _sourceImageUrl;
  private _image;
  private _elementRef;
  private _canvasElement;

  @Input() set sourceImageUrl(value) {
    if ( value ) {
      this.resetState();
      this._sourceImageUrl = value;
      this.loadImage();
      //this.drawImage();
    }
  };

  get sourceImageUrl () {
    return this._sourceImageUrl;
  }

  constructor (@Inject(ElementRef) elementRef: ElementRef) {
    this._elementRef = elementRef;
  }

  ngOnInit() {

  }

  loadImage () {
    let image = new Image();

    image.onload = () => {
      console.log('imageONload');
      this._image = image;
      this.drawImage();
    }

    image.src = this._sourceImageUrl;
  }

  resetState () {
    console.log('reset state !!!!');
  }

  drawImage () {

    this._canvasElement = this._elementRef.nativeElement.querySelector('.image-placement_canvas');

    let canvas = this._canvasElement;
    let image = this._image;

    console.log('canvas ', canvas, 'image', image);

    var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);

  }

}
