import { Component, OnInit } from '@angular/core';
import { WeatherApi } from '../../services/weather-api';
import { CommonModule } from '@angular/common';
import { Search } from '../search/search';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-current-weather',
  imports: [CommonModule, Search, RouterModule],
  templateUrl: './current-weather.html',
  styleUrl: './current-weather.css'
})
export class CurrentWeather implements OnInit {
  constructor(private weatherService:WeatherApi){}
  weatherData: any;
  errorMessage = '';
  ngOnInit(): void {
    this.weatherService.getWeatherDetails('Cairo')
  }
  onSearch(city:string) {
    this.getWeather(city)
  }
  private getWeather(city:string) {
    this.weatherService.getWeatherDetails(city).subscribe({
      next: (data) => {
        this.weatherData = data
        console.log(data);
        
        this.errorMessage = ''
      },
      error: (err) => {
        this.errorMessage = "Failed to get weather data"
      }
    })
  }
}
