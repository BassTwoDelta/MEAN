import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  allAuthors: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){

  }

  // getAuthorsFromService(){
  //   this._httpService.getAuthors().subscribe(data =>{
  //     console.log("Got em!", data)
  //     this.allAuthors = data
  //   })
  // }
}
