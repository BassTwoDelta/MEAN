import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/products')
  }

  addNewProduct(product){
    return this._http.post('/products/new', product)
  }

  getDeets(id){
    return this._http.get(`/products/${id}`)
  }

  deleteProduct(id){
    return this._http.delete(`/products/${id}/delete`)
  }

  show(id){
    return this._http.get(`/products/${id}/edit`)
  }

  edit(id, productToEdit){
    return this._http.put(`products/${id}/edit`, productToEdit)
  }
}
