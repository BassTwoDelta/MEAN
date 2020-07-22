import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloAngular';
  titleClicked= false;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {

  }

  getTasks(){
    this.titleClicked =! this.titleClicked;
    this._httpService.getTasks().subscribe(data=> console.log(data))
  }

  logTitle(){
    console.log("Title is:", this.title)
  }

  onSubmit(){
    console.log('form submited', this.title)
    this._httpService.postTitle(this.title).subscribe(data=>{
      console.log("appcompts got data", data)
    })
  }
}