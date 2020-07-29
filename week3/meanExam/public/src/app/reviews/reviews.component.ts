import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  id: String;
  allReviews: any; 
  @Input() allRestaraunts
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      console.log(params)
      this.id = params["id"]})
      this.getReviews()
  }

  getReviews(){
    this._httpService.getReviews(this.id).subscribe(data =>{
      console.log("got the reviews", data)
      this.allReviews = data
    })
  }


}
