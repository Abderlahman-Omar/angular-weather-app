import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApi {

  constructor(private httpClient: HttpClient) { }
  getWeatherDetails():Observable<any> {
    this.httpClient.get(
      'http://api.weatherapi.com/v1/forecast.json?key=acc3cf8dbee349ecac2225528241306&q=cairo&days=1'
    )
  }
}
