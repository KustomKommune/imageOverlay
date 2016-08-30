/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ImagePlacementComponent } from './image-placement.component';

describe('Component: ImagePlacement', () => {
  it('should create an instance', () => {
    let component = new ImagePlacementComponent({nativeElement: {}});
    expect(component).toBeTruthy();
  });
});
