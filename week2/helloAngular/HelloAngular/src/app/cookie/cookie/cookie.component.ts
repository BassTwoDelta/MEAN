import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {
  title = "My Favorite Cookie"
  constructor() { }

  ngOnInit() {
  }

  changeTitle = (name:string) =>{
    console.log(name)
    this.title = "My New Fave Cookie"
  }

}
