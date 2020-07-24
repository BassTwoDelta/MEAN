import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit {
  id: String;
  author: any; 
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      console.log(params)
      this.id = params["id"]})
      this.show()
  }

  show(){
    this._httpService.showEditAuthor(this.id).subscribe(author =>{
      console.log("Got the author to edit!", author)
      this.author = author;
    })
  }

  editAuthor(){
    this._httpService.editAuthor(this.author, this.id).subscribe(author =>{
      console.log("EDITED THE AUTHORRRR", author)
      this.author={name: ""}
    })
  }

}
