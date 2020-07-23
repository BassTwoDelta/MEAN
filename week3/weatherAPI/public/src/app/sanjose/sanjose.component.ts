import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.scss']
})
export class SanjoseComponent implements OnInit {
  currentWeather = {};

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSanjoseWeather()
  }

  getSanjoseWeather(){
    this._httpService.getSanjoseWeather().subscribe(data => {
      console.log("Got San Jose Weather", data)
      this.currentWeather = data;
      //@ts-ignore
      this.averageTemp= Math.round((data.main.temp_max + data.main.temp_min)/2);
    })
  }

}