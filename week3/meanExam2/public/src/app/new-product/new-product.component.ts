import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  productToAdd: any;
  errors = []
  constructor(
    private _httpService: HttpService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.productToAdd = {name:"", qty: null, price: null}
  }

  addNewProduct(){
    this._httpService.addNewProduct(this.productToAdd).subscribe(data => {
      console.log("added", data)
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
      this.router.navigate(['/products'])
      }
    })
  }
}
