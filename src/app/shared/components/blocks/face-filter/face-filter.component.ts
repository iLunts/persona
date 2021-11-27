import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-block-face-filter',
  templateUrl: './face-filter.component.html',
  styleUrls: ['./face-filter.component.less'],
})
export class FaceFilterComponent implements OnInit {
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit(): void {}
}
