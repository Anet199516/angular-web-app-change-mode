import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class GameTableService {
  private configUrl = '/assets/table-data.json';

  constructor(private http: HttpClient) {
  }

  public getInfoGames(): Observable<any> {
    return this.http.get(`http://localhost:4200${this.configUrl}`);
  }
}
