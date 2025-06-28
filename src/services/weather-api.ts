import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../types/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherApi {

  constructor(private httpClient: HttpClient) { }
  getWeatherDetails(city: string):Observable<WeatherResponse> {
   return this.httpClient.get<WeatherResponse>(
      `http://api.weatherapi.com/v1/forecast.json?key=acc3cf8dbee349ecac2225528241306&q=${city}&days=5`
    )
  }
}
