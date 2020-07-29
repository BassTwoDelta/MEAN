import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  allRestaraunts: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllFromService()
  }

  getAllFromService(){
    this._httpService.getAll().subscribe(data => {
      console.log("Got the restaraunts", data)
      this.allRestaraunts = data;
    })
  }

  deleteRestaurant(id){
    this._httpService.destroy(id).subscribe(data =>{
      console.log("deleted", data)
      this.getAllFromService()
    })
  }

}
