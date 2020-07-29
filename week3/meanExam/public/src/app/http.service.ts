import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/restaurants')
  }

  addNewRestaurant(restaurant){
    return this._http.post('/restaurants/new', restaurant)

  }

  getReviews(id){
    return this._http.get(`/restaurants/${id}`)
  }

  addReview(id, reviewToAdd){
    return this._http.post(`/restaurants/${id}/review`, reviewToAdd)
  }

  destroy(id){
    return this._http.delete(`/restaurants/${id}/delete`)
  }

  show(id){
    return this._http.get(`/restaurants/${id}/edit`)
  }
  
  edit(id, restaurantToEdit){
    return this._http.put(`/restaurants/${id}`, restaurantToEdit)
  }
}