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
  showTaskClick = false;
  showTasksClick = false;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    // this._httpService.getTasks().subscribe(tasks => {
    //   console.log(tasks);
    //   this.tasks = tasks;
    // })
  }

  getTasks(){
    this.showTasksClick=!this.showTasksClick
    this._httpService.getTasks().subscribe(data => {
    console.log("Got Our Tasks!", data)
    this.tasks = data;
  })

  }

  showTask(id :String){
    this.showTaskClick =! this.showTaskClick;
    console.log(id)
    this._httpService.showTask(""+ id).subscribe(task => {console.log("Got The Task!!", task)
    this.singleTask = task})
    
  }
}
