import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.scss']
})
export class BurbankComponent implements OnInit {
  currentWeather = {};

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getBurbankWeather()
  }

  getBurbankWeather(){
    this._httpService.getBurbankWeather().subscribe(data => {
      console.log("Got Burbank Weather", data)
      this.currentWeather = data;
      //@ts-ignore
      this.averageTemp= Math.round((data.main.temp_max + data.main.temp_min)/2);
    })
  }
}
