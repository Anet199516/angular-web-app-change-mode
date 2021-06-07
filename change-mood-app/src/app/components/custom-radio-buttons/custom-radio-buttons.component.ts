import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IModeIcon} from '../../types/table-types';

@Component({
  selector: 'app-custom-radio-buttons',
  templateUrl: './custom-radio-buttons.component.html',
  styleUrls: ['./custom-radio-buttons.component.css']
})
export class CustomRadioButtonsComponent implements OnInit {
  @Input() labelsList: IModeIcon[];
  @Output() onModeIconChanged = new EventEmitter<{name: string, checked: boolean}[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public changeModeIcon(e: any, icon: IModeIcon): void {
    e.stopPropagation();

    const selectedIcon = this.labelsList.map(elem => {
      return {
        ...elem,
        checked: !elem.checked
      };
    });

    this.onModeIconChanged.emit(selectedIcon);
  }
}
