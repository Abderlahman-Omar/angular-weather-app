import { Routes } from '@angular/router';
import { CurrentWeather } from '../components/current-weather/current-weather';
import { ForecastComponent } from '../components/forecast/forecast';

export const routes: Routes = [
  { path: '', redirectTo: '/current', pathMatch: 'full' },
  { path: 'current', component: CurrentWeather },
  { path: 'forecast', component: ForecastComponent },
];