import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {TableTypes} from '../../types/table-types';

@Injectable()
export class HttpService {
  private configUrl = 'http://localhost:5000/';
  private API_GET_DATA = 'data';
  private API_GET_DATA_BY_ID = 'dataById';
  private API_UPDATE_DATA = 'update';
  private API_CREATE_DATA = 'create';

  constructor(private http: HttpClient) {}

  public getTableData(): Observable<TableTypes[]> {
    return this.http.get<TableTypes[]>(`${this.configUrl}${this.API_GET_DATA}`);
  }

  public getDataById(): Observable<TableTypes> {
    return this.http.get<TableTypes>(`${this.configUrl}${this.API_GET_DATA_BY_ID}`);
  }

  public updateData(): Observable<any> {
    return this.http.get<any>(`${this.configUrl}${this.API_UPDATE_DATA}`);
  }

  public createNewData(): Observable<TableTypes[]> {
    return this.http.get<TableTypes[]>(`${this.configUrl}${this.API_CREATE_DATA}`);
  }
}
