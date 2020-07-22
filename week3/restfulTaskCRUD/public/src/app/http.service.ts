import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
  }

  getTasks(){
    return this._http.get('/tasks');
  }

  showTask(id:String){
    return this._http.get(`/task/${id}`);
  }

  createTask(newtask){
    console.log(newtask)
    return this._http.post("/new/task" , newtask)
  }

  updateTask(id, taskToEdit){
    console.log(id)
    return this._http.put(`/update/${id}`, taskToEdit )
  }

  delete(id:String){
    return this._http.delete('/delete/'+ id)
  }


}
