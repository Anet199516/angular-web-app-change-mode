import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.css']
})
export class CustomToggleComponent implements OnInit {
  @Input() checked: boolean;
  @Input() label: string;

  @Output() onToggleChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public toggleChanged(e: any): void {
    e.stopPropagation();

    const isChecked = !this.checked;
    this.onToggleChanged.emit(isChecked);
  }

}
