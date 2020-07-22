import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  tasks: any;
  singleTask: any;
  newTask: any;
  taskToEdit: any;
  editTaskClick = false;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newTask = {title: "", description: ""}
    this._httpService.getTasks().subscribe(data => {
    console.log("Got Our Tasks!", data)
    this.tasks = data;
  })
}

  getTask(){
    this._httpService.getTasks().subscribe(data => {
    console.log("Got Our Tasks!", data)
    this.tasks = data;
    })
  }

  createTask(){
    this._httpService.createTask(this.newTask).subscribe(data => {
      console.log("Got New Task!", data)
    })
    console.log(this.newTask)
    this.newTask = {title: "", description: ""}
    this.getTask();
  }

  deleteTask(id:String){
    this._httpService.delete(id).subscribe(data => {
      console.log("Task Deleted!")
    })
    this.getTask();
  }


  // showTask(id :String){
  //   this.editTaskClick != this.editTaskClick
  //   console.log(id)
  //   this._httpService.showTask(""+ id).subscribe(task => {console.log("Got The Task!!", task)
  //   this.singleTask = task})
    
  // }

  ShowEditTask(id:String){
    this._httpService.showTask(""+ id).subscribe(task => {console.log("Got The Task!!", task)
    this.taskToEdit = task})
    
  }

  updateTask(id:String){
    console.log(id)
    this._httpService.updateTask(id, this.taskToEdit).subscribe(task => {console.log("GOT IT!", task)
    this.getTask()
  })
  }
}
