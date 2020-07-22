class Bike {
    miles: number;

    constructor(public price: number, public max_speed: string) {
        this.miles = 0;
    }

    displayInfo() {
        console.log(`Price: ${this.price}, Max Speed is: ${this.max_speed}, and Total miles = ${this.miles}`)
    }

    ride(){
        console.log('Riding...')
        this.miles += 10;
        return this
    }

    reverse(){
        console.log("Reversing...")
        if(this.miles < 5){
            this.miles = 0;
            return this
        }
        else{
        this.miles -= 5;
        return this
        }
    }
}

let bike1 = new Bike(200, "20mph")
let bike2 = new Bike(300, "30mph")
let bike3 = new Bike(400, "40mph")

bike1.ride().ride().ride().reverse().displayInfo()
bike2.ride().ride().reverse().reverse().displayInfo()
bike3.reverse().reverse().reverse().displayInfo()
