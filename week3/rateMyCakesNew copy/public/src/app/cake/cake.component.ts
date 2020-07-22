import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {

  @Input()singleCake
  @Input()averageRating
  constructor() { }

  ngOnInit() {
  }

}

