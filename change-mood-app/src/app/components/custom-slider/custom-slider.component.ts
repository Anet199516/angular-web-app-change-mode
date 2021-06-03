import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.css']
})
export class CustomSliderComponent implements OnInit {
  @Input() value: number;
  min = 0;
  max = 100;
  step = 1;
  tickInterval = 1000;

  constructor() { }

  ngOnInit(): void {
  }

  public formatLabel(value: number): string | number {
    if (value >= 1000) {
      return Math.round(value / 1000) + '%';
    }

    return value;
  }

}
