import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FormFun';
  newPizza: {name:String,toppings:Array<string> ,price: Number };
  tempToppings = "";
  firstPizza: {name:String,toppings:Array<string> ,price: Number };
  pizzaList:Array<{name:String,toppings:Array<string> ,price: Number}>;

  constructor(){}

  ngOnInit(){
    this.newPizza = {
      name: "",
      toppings:[],
      price: 0.0
    },
      this.firstPizza = {
        name: "DabEasy",
        toppings:["meat", "more meat", "MORE"],
        price: 0.0
      }
    }

  submitPizza(){
    this.newPizza.toppings = this.tempToppings.split(",")
    console.log("New Pizza Is:", this.newPizza)
    }
}
