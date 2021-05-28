import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {throwError} from 'rxjs';
import {GameTableService} from '../../services/game-table/game-table.service';
import {TableTypes} from '../../types/table-types';

@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExampleTableComponent implements OnInit {
  public dataSource: TableTypes[];
  public mockupData: TableTypes[];
  public columnsToDisplay = ['name', 'description', 'percentage', 'dateCreated', 'createdBy', 'lastUpdatedBy', 'visible', 'modeIcon'];
  public expandedElement: TableTypes | null;

  public modeIcon = ['circle', 'rectangle'];

  constructor(private gameService: GameTableService) { }

  public ngOnInit(): void {
    this.gameService.getInfoGames().subscribe((res) => {
      if (!res?.length) {
        return null;
      }

      this.mockupData = res;
      this.dataSource = this.mockupData;
    }, ((error) => throwError(error)));
  }

}
