import {Component, Input, OnInit} from '@angular/core';
import {IEntitiesData} from '../../types/table-types';

@Component({
  selector: 'app-list-entities',
  templateUrl: './list-entities.component.html',
  styleUrls: ['./list-entities.component.css']
})
export class ListEntitiesComponent implements OnInit {
  @Input() data: IEntitiesData[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.data, 'data')
  }

}
