import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.css']
})
export class CustomToggleComponent implements OnInit {
  @Input() checked: boolean;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
