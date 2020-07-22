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
    this.punch = function(ninja){
        ninja.health -= 5; 
        console.log(`${ninja.name} was punched by ${this.name} and lost 5 Health!`)
        return this
    }

    this.kick = function(ninja){
        var damage = (15 * this.strength)
        ninja.health -= damage;
        console.log(`${ninja.name} was kicked by ${this.name} and lost ${damage} Health!`)
    }
}

var ninja1 = new ninjaConstructor("Scoober");
var ninja2 = new ninjaConstructor("Jean");
var ninja3 = new ninjaConstructor("Gus");

ninja1.punch(ninja2);
ninja2.showStats();
ninja1.kick(ninja3);
ninja3.showStats();