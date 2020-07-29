import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  allProducts:any;
  mySubscription: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getAllProductsFromService()
  }

  getAllProductsFromService(){
    this._httpService.getAll().subscribe(data =>{
      console.log("Got All Products", data)
      this.allProducts = data
    })
  }

}
