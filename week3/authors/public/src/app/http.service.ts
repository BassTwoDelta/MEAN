import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getAuthors(){
    return this._http.get('/authors')
  }

  newAuthor(){
    return this._http.get('/new')
  }

  addingAuthor(authorToAdd){
    return this._http.post('/new/author', authorToAdd)
  }

  deleteAuthor(id){
    return this._http.delete(`/authors/${id}`, id)
  }

  showEditAuthor(id){
    return this._http.get(`/edit/${id}`)
  }

  editAuthor(author, id){
    console.log(author)
    return this._http.post(`/edit/${id}`, author)
  }
}
