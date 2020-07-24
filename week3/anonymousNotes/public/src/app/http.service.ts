import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getNotes(){
    return this._http.get('/notes')
  }

  addNote(note){
    return this._http.post('/notes/add', note)
  }
}
