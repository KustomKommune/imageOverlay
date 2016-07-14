/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { RangeSliderComponent } from './range-slider.component';

describe('Component: RangeSlider', () => {
  it('should create an instance', () => {
    let component = new RangeSliderComponent();
    expect(component).toBeTruthy();
  });
});
