import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'public';
  currentWeather = {};

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    // this.getHomeWeather()
  }

  // getHomeWeather(){
  //   this._httpService.getDallasWeather().subscribe(data => {
  //     console.log("got the weather", data)
  //     this.currentWeather = data;
  //   })
  }


