import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  restaurantToEdit: any;
  id: String;
  errors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

    ngOnInit(){
      this._route.params.subscribe((params: Params)=>{
        this.id = params["id"]})
        this.show()
    }

    show(){
      this._httpService.show(this.id).subscribe(data =>{
        console.log("ready to edit", data)
        this.restaurantToEdit = data;
      })
    }

    editRestaurant(){
      console.log(this.restaurantToEdit)
      this._httpService.edit(this.id, this.restaurantToEdit).subscribe(data =>{
        console.log("edited!", data)
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
          this.redirect()
        }
      })
    }

    redirect(){
      this._router.navigate([`/restaurants`])
    }

}
