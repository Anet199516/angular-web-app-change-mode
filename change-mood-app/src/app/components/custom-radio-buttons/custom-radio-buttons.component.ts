import {Component, Input, OnInit} from '@angular/core';
import {IModeIcon} from '../../types/table-types';

@Component({
  selector: 'app-custom-radio-buttons',
  templateUrl: './custom-radio-buttons.component.html',
  styleUrls: ['./custom-radio-buttons.component.css']
})
export class CustomRadioButtonsComponent implements OnInit {
  @Input() labelsList: IModeIcon[];

  constructor() { }

  ngOnInit(): void {
  }
}
