import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {AppState} from '../../store/app.state';
import * as TableActions from '../../store/table-practise/actions/table.actions';
import {HttpService} from '../../services/http/http.service';
import {selectTableData} from '../../store/table-practise/selectors/table.selectors';
import {IModeIcon, TableTypes} from '../../types/table-types';

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
export class ExampleTableComponent implements OnInit, OnDestroy {
  private dataSourceSubs$: Subscription;

  public dataSource: TableTypes[];
  public mockupData: TableTypes[];
  public columnsToDisplay = ['name', 'description', 'percentage', 'dateCreated', 'createdBy', 'lastUpdatedBy', 'visible', 'modeIcon'];
  public expandedElement: TableTypes | null;

  public modeIcon = ['circle', 'rectangle'];

  constructor(private http: HttpService,
              private store$: Store<AppState>) { }

  public ngOnInit(): void {
    this.store$.dispatch(TableActions.getData());

    this.dataSourceSubs$ = this.store$.select(selectTableData).subscribe(data => this.dataSource = data);
  }

  public onRowChanged(row): void {
    this.store$.dispatch(TableActions.selectRow({row}));
  }

  public onVisibilityToggleChanged(toggleState: any, element: TableTypes): void {
    this.store$.dispatch(TableActions.changeVisibleProperty({id: element.id, fields: {visible: toggleState}}));
  }

  public modeIconChanged(icon: IModeIcon[], element: TableTypes): void {
    this.store$.dispatch(TableActions.changeModeIconProperty({id: element.id, fields: {modeIcon: icon}}));
  }

  public saveChanges(): void {
    this.store$.dispatch(TableActions.saveChanges());
  }

  public ngOnDestroy(): void {
    if (this.dataSourceSubs$) {
      this.dataSourceSubs$.unsubscribe();
    }
  }

}
