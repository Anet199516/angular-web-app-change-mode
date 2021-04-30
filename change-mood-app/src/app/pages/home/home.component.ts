import { Component, OnInit } from '@angular/core';
import {FbService} from "../../services/fb/fb.service";
import {Observable} from "rxjs";
import * as CitiesSelectors from "../../store/cities/selectors/city.selectors";
import * as CitiesActions from "../../store/cities/actions/city.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cities: Observable<any[]>;

  constructor(private fb: FbService, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(CitiesActions.getCities());

    this.cities = this.store.select(CitiesSelectors.selectCitiesList);
  }

}
