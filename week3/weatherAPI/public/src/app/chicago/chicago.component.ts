import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service"

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.scss']
})
export class ChicagoComponent implements OnInit {
  currentWeather = {};

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getChicagoWeather()
  }

  getChicagoWeather(){
    this._httpService.getChicagoWeather().subscribe(data => {
      console.log("Got Chicago Weather", data)
      this.currentWeather = data;
      //@ts-ignore
      this.averageTemp= Math.round((data.main.temp_max + data.main.temp_min)/2);
    })
  }

}

