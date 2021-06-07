import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ModifiedProperties} from '../../app.model';
import {TableTypes} from '../../types/table-types';
import {HttpHelperService} from './http-helper.service';

const HEADERS = new HttpHeaders({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
});

@Injectable()
export class HttpService {
  private configUrl = 'http://localhost:5000/';
  private API_GET_DATA = 'data';
  private API_GET_DATA_BY_ID = 'dataById';
  private API_UPDATE_DATA = 'update';
  private API_UPDATE_ALL_DATA = 'updateAll';
  private API_CREATE_DATA = 'create';

  constructor(private http: HttpClient) {}

  public getTableData(): Observable<TableTypes[]> {
    return this.http.get<TableTypes[]>(`${this.configUrl}${this.API_GET_DATA}`);
  }

  public getDataById(): Observable<TableTypes> {
    return this.http.get<TableTypes>(`${this.configUrl}${this.API_GET_DATA_BY_ID}`);
  }

  public updateData(data: {id: string, fields: {[key: string]: string | boolean}}): Observable<any> {

    if (data == null) {
      return null;
    }

    return this.http.post<any>(`${this.configUrl}${this.API_UPDATE_DATA}`, data, {headers: HEADERS});
  }

  public updateAll(properties: ModifiedProperties[]): Observable<any> {
    if (!properties?.length) {
      return null;
    }

    return this.http.post<any>(`${this.configUrl}${this.API_UPDATE_ALL_DATA}`, properties, {headers: HEADERS});
  }

  public createNewData(): Observable<TableTypes[]> {
    return this.http.get<TableTypes[]>(`${this.configUrl}${this.API_CREATE_DATA}`);
  }
}
