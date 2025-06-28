// forecast.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Search } from '../search/search';
import { WeatherApi } from '../../services/weather-api';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, Search],
  templateUrl: './forecast.html',
  styleUrls: ['./forecast.css']
})
export class ForecastComponent implements OnInit {
  weatherData: any; // Changed from forecastData to weatherData
  city = '';
  errorMessage = '';

  constructor(
    private weatherService: WeatherApi,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'] || 'Cairo';
      this.getForecast(this.city);
    });
  }

  onSearch(city: string) {
    this.city = city;
    this.getForecast(city);
  }

 // forecast.component.ts
isLoading = false;

private getForecast(city: string) {
  this.isLoading = true;
  this.weatherService.getWeatherDetails(city).subscribe({
    next: (data) => {
      this.weatherData = data;
      this.errorMessage = '';
      this.isLoading = false;
    },
    error: (err) => {
      this.errorMessage = 'Failed to fetch forecast data. Please try again.';
      this.isLoading = false;
      console.error(err);
    }
  });
}
}