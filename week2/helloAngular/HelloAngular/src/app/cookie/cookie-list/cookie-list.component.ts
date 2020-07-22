import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-list',
  templateUrl: './cookie-list.component.html',
  styleUrls: ['./cookie-list.component.scss']
})
export class CookieListComponent implements OnInit {
  numCookies = [1,2,3,4,5]

  constructor() { }

  ngOnInit() {
  }

}
