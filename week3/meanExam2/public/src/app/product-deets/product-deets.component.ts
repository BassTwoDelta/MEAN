import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-product-deets',
  templateUrl: './product-deets.component.html',
  styleUrls: ['./product-deets.component.scss']
})
export class ProductDeetsComponent implements OnInit {
  id: String;
  product: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.id = params["id"]})
    this.getDeets()
  }

  getDeets(){
    this._httpService.getDeets(this.id).subscribe(data => {
      console.log("Got the Deets", data)
      this.product = data;
    })
  }

  deleteProduct(){
    this._httpService.deleteProduct(this.id).subscribe(data => {
      console.log("deleted", data)
      this._router.navigate(['/products'])
    })
  }

}
