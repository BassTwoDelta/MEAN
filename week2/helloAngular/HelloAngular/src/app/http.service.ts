import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTasks(){
    return this._http.get('/tasks')
  }

  postTitle(title){
    console.log(title)
    return this._http.post('/title',{'title': title})
  }
}
