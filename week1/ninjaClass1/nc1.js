function ninjaConstructor(name, health){
    var ninja = {}
    var speed = 3;
    var strength = 3;
    this.health = 100; 
    this.name = name; 
    this.speed = speed;
    this.strength = strength;

    this.sayName = function(){
        console.log("My ninja name is "+ this.name+"!")
        return this
    }
    this.showStats = function(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
        return this
    }

    this.drinkSake = function(){
        this.health += 10;
        console.log("Added 10 health!")
        return this
    }
}

var ninja1 = new ninjaConstructor("Scoober");
console.log(ninja1)
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
