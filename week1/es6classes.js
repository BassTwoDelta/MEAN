class Person {
    constructor(name,age){
        this.name = name;
        this.age = age; 
        this._wallet = 0;
    }

    getBalance(){
        return this._wallet;
    }

    getPaid(){
        this._wallet +=10; 
        return this
    }

    get wallet (){
        return this._wallet
    }

    set wallet (value){
        this._wallet = value
    }
}

bob = new Person('bob', 37)

console.log(bob.getBalance())

class Mailman extends Person {
    constructor(name, age,route){
        super(name,age) // super when in constructor calls the class we extended. If super is in a different function it calls that function.
        this.route = route
    }
    deliver(){
        super.getPaid()
        this._wallet +=1; 
    }
}

carl = new Mailman('name', 22, 'clifton');
console.log(carl)
carl.deliver()
console.log(carl)

bob.getPaid()
console.log(bob)

class ExpertMailman extends Mailman{
    constructor(name, age, route){
        super(name,age,route)
    }

    bigBucks(){
        super.getPaid().getPaid()
    }
}

mark = new ExpertMailman('mark',66,'oldpark')

mark.bigBucks();
console.log(mark)