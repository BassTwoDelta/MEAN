import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.scss']
})
export class DallasComponent implements OnInit {
  currentWeather = {};

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getDallasWeather()
  }

  getDallasWeather(){
    this._httpService.getDallasWeather().subscribe(data => {
      console.log("Got Dallas Weather", data)
      this.currentWeather = data;
      //@ts-ignore
      this.averageTemp= Math.round((data.main.temp_max + data.main.temp_min)/2);
    })
  }

}
