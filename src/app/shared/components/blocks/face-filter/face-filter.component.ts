import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';

@Component({
  selector: 'app-block-face-filter',
  templateUrl: './face-filter.component.html',
  styleUrls: ['./face-filter.component.less'],
})
export class FaceFilterComponent implements OnInit {
  parallaxConfig: IParallaxScrollConfig = {
    parallaxSpeed: 1,
    parallaxSmoothness: 1,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease-in',
    parallaxThrottleTime: 80,
  };

  constructor() {}

  ngOnInit(): void {}
}
