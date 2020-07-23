import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service"

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.scss']
})
export class DcComponent implements OnInit {
  currentWeather = {};

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getDCWeather()
  }

  getDCWeather(){
    this._httpService.getDCWeather().subscribe(data => {
      console.log("Got DC Weather", data)
      this.currentWeather = data;
      //@ts-ignore
      this.averageTemp= Math.round((data.main.temp_max + data.main.temp_min)/2);
    })
  }
}
