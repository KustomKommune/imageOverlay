import { Component, OnInit } from '@angular/core';
import 'jquery';
import 'rangesliderjs';

declare var jQuery;
declare var rangesliderjs;


@Component({
  moduleId: module.id,
  selector: 'app-range-slider',
  templateUrl: 'range-slider.component.html',
  styleUrls: ['range-slider.component.css']
})
export class RangeSliderComponent implements OnInit {

  constructor() {
    console.log('in the rangle slider');
  }

  ngOnInit() {
  }

}
