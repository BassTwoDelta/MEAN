import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getDallasWeather(){
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=6b53a11d9b0635a506e7c8b1696bfa44");
  }

  getSeattleWeather(){
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=6b53a11d9b0635a506e7c8b1696bfa44")
  }

  getSanjoseWeather(){
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=san jose&units=imperial&appid=6b53a11d9b0635a506e7c8b1696bfa44")
  }

  getBurbankWeather(){
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=burbank&units=imperial&appid=6b53a11d9b0635a506e7c8b1696bfa44")
  }

  getDCWeather(){
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=washington&units=imperial&appid=6b53a11d9b0635a506e7c8b1696bfa44")
  }

  getChicagoWeather(){
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=6b53a11d9b0635a506e7c8b1696bfa44")
  }
}