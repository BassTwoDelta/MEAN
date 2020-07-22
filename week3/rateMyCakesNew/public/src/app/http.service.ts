import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getCakes(){
    return this._http.get('/cakes')
  }

  addCake(caketoadd){
    return this._http.post('/new/cake', caketoadd)
  }

  showCake(id){
    return this._http.get(`/cakes/${id}`)
  }

  addRaC(id, RaC){
    return this._http.post(`/cakes/comment/${id}`, RaC)
  }
}