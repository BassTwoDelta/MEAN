import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "public"
  allRestaurants: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllFromService()
  }

  getAllFromService(){
    this._httpService.getAll().subscribe(data => {
      console.log("Got all of the restaurants", data)
      this.allRestaurants = data;
    })
  }

}
