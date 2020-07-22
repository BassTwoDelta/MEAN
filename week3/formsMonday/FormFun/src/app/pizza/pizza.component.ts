import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  @Input()pizza
  constructor() { }

  ngOnInit() {
    // this.pizza ={
    //   name: "temp",
    //   toppings:["hopes", "dreams"],
    //   price: 0.0
    // }
  }

  tantrum(){
    this.pizza.toppings = 'Cheese'
    this.pizza.name = 'asflkasdasd'
  }

}
