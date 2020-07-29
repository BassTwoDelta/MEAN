import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {
  newRestaurantToAdd: any;
  errors = [];

  constructor(
    private _httpService: HttpService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.newRestaurantToAdd = {name: "", cuisine:""}
  }

  addNewRestaurant(){
    this._httpService.addNewRestaurant(this.newRestaurantToAdd).subscribe(data => {
      console.log("Added", data)
      this.errors = [];
      //@ts-ignore
      if(data.errors){
        //@ts-ignore
        for(let i in data.errors){
          //@ts-ignore
          this.errors.push(data.errors[i].properties.message)
        }
        console.log(this.errors)
      }
      else{
      this.router.navigate(['/restaurants'])
      }
    })
  }

}
