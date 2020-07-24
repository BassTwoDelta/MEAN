import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {
  newAuthorToAdd: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newAuthor()
    this.newAuthorToAdd = {name: ""}
  }

  newAuthor(){
    this._httpService.newAuthor().subscribe(() =>{
      console.log('working')
    })
  }

  addNewAuthor(){
    console.log(this.newAuthorToAdd)
    this._httpService.addingAuthor(this.newAuthorToAdd).subscribe(data => {
      console.log("Added new Author", data)
    })

  }

}
