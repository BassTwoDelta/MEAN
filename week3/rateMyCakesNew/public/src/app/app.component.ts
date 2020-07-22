import { Component, OnInit, AbstractType } from '@angular/core';
import { HttpService } from './http.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  allCakes: any;
  newCake: any;
  singleCake: any;
  RaC: any;
  averageRating: Number;
  showCakeClick = false;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getCakesFromService();
    this.newCake = {baker: "", image: ""}
  }

  getCakesFromService(){
    this._httpService.getCakes().subscribe(data => {
      console.log("Got the Data", data)
      this.allCakes = data;
    });
  }

  addCake(){
    this._httpService.addCake(this.newCake).subscribe(data => {
      console.log("Got the new cake!", data)
    })
    console.log(this.newCake)
    this.newCake = {title: "", description: ""}
    this.getCakesFromService();

  }

  showCake(id:String){
    this.showCakeClick = true;
    console.log(id)
    this._httpService.showCake(id).subscribe(data => {
      console.log("Got the cake!", data)
      this.singleCake = data;
      let sum = 0; 
      //@ts-ignore
      for(let i=0; i<data.comment.length; i++){
        //@ts-ignore
        sum += data.comment[i].rating
      }
      //@ts-ignore
      this.averageRating = sum / data.comment.length;
    })
  }

  addRatingAndComment(event,id){
    this.RaC = {
      comment: event.target.comment.value,
      rating: Number(event.target.rating.value)
    }
    this._httpService.addRaC(id, this.RaC).subscribe(data => {
      console.log("Got the rating and comment", data)
      })
  }

}