import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.scss']
})
export class SeattleComponent implements OnInit {
  currentWeather = {};
  averageTemp: Number;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSeattleWeather()
  }

  getSeattleWeather(){
    this._httpService.getSeattleWeather().subscribe(data => {
      console.log("Got Seattle Weather", data)
      this.currentWeather = data;
      //@ts-ignore
      this.averageTemp= Math.round((data.main.temp_max + data.main.temp_min)/2);
    })
  }

}