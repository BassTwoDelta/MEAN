import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.scss']
})
export class AllAuthorsComponent implements OnInit {
  allAuthors: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService()

  }

  getAuthorsFromService(){
    this._httpService.getAuthors().subscribe(data =>{
      console.log("Got em!", data)
      this.allAuthors = data;
    })
  }

  deleteAuthor(id){
    this._httpService.deleteAuthor(id).subscribe(data =>{
      console.log("DELETED", data)
      this.getAuthorsFromService()
    })
  }
}
