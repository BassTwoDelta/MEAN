import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getBikes(){
    return this._http.get('/browse')
  }
  
  deleteBike(id){
    return this._http.delete(`/delete/${id}`)
  }
}
