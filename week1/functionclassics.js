function petMaker(){
    var pet = {}
    pet.name = "Fido"

    pet.speak = function(){
        console.log('Woof! Woof!')
    }
    return pet
}

let fido = petMaker()

console.log(fido)

fido.speak()

function carMaker(){
    this.make="Ford";
    this.color = "red";

    this.start = function(){
        console.log('vroom')
    }

}

mycar = new carMaker()
console.log(mycar)