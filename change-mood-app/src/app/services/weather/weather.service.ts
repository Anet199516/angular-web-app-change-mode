import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from "../../../environments/environment";
import {first, map} from "rxjs/operators";

@Injectable()
export class WeatherService {
  private readonly baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private readonly forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  private readonly appKey = environment.appKey;


  constructor(public http: HttpClient) {
  }

  getWeather(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get(
      `${this.baseURL}${city}&units=${metric}&APPID=${this.appKey}`).pipe((first()));
  }

  getForecast(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get(
      `${this.forcastURL}${city}&units=${metric}&APPID=${this.appKey}`)
      .pipe(first(), map((weather) => weather['list']));
  }
}
