import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-all-bikes',
  templateUrl: './all-bikes.component.html',
  styleUrls: ['./all-bikes.component.scss']
})
export class AllBikesComponent implements OnInit {
  title = 'public';
  allBikes: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit(){

    this.getAllBikesFromService()

  }

  getAllBikesFromService(){
    this._httpService.getBikes().subscribe(bikes =>{
      console.log("Got the bikes", bikes)
      this.allBikes = bikes;
    })
  }

  deleteBike(id){
    this._httpService.deleteBike(id).subscribe(data => {
      console.log("BIKE DELETED!", data)
      this.getAllBikesFromService()
    })

  }

}
