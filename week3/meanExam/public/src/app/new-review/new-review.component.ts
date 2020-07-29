import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.scss']
})
export class NewReviewComponent implements OnInit {
  id: String;
  reviewToAdd: any;
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.id = params["id"]})
  }

  addReview(event){
    this.reviewToAdd = {

      customer_name: event.target.customer_name.value,
      stars: Number(event.target.stars.value),
      review: event.target.review.value
    }

    this._httpService.addReview(this.id,this.reviewToAdd).subscribe(data => {
      console.log("Added Reivew", data)
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
    this._router.navigate([`/restaurants/${this.id}`])
  }
}