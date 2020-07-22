// 1.
// var myString: any;
// // changed from string to any
// myString = "Bee stinger";
// // changed the type of Mystring from Stirng to Any
// myString = 9;

// 2.
// function sayHello(name: any){
//     // changed the name type from string to any
//     return `Hello, ${name}!`;
//     }
//     console.log(sayHello("Kermit"));
//     console.log(sayHello(9));

// 3.
// function fullName(firstName: string, lastName: string, middleName?: string){
//     // added the ? at the end of MiddleName so it will be "opitonal"
//     let fullName = `${firstName} ${middleName} ${lastName}`;
//     return fullName;
// }
// console.log(fullName("Mary", "Moore", "Tyler"));
// console.log(fullName("Jimbo", "Jones"));

// 4.
// interface Student {
//     firstName: string;
//     lastName: string;
//     belts: number;
// }
// function graduate(ninja: Student){
//     return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
// }
// const christine = {
//     firstName: "Christine",
//     lastName: "Yang",
//     belts: 2
// }
// const jay = {
//     firstName: "Jay",
//     lastName: "Patel",
//     belts: 4
//     // this was originally "belt" needed to be changed to belts to match the interface of Student.
// }
//  // This seems to work fine:
// console.log(graduate(christine));
//  // This one has problems:
// console.log(graduate(jay));

// 5. 
// class Ninja {
//     fullName: string;
//     constructor(
//         public firstName: string,
//         public lastName: string){
//         this.fullName = `${firstName} ${lastName}`;
//         }
//     debug(){
//         console.log("Console.log() is my friend.")
//     }
// }
// const shane = new Ninja("Alan", "Turing");
//  // add the first name and last name in the params
//  // got rid of the const turing as it is not neeeded
// function study(programmer: Ninja){
//     return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
// }
// // had to change from turning to shane
// console.log(study(shane));

// 6.

// var increment = (x: number) => x + 1;
// // needed to give x a type. 
// console.log(increment(3));
// var square = (x:number) => {x * x};
// // needed to give x a type!
// console.log(square(4));
// var multiply = (x:number,y:number) => x * y;
// // need to give types to both x and y. 
// var math = (x: number, y: number) => {
//     let sum = x + y
//     let product = (x: number, y: number) => x * y;
//     let difference = (x: number, y: number) => Math.abs(x - y)
//     return [sum, product, difference];
// }

// 7.

// class Elephant {
//     constructor(public age: number){}
//     birthday = () => {
//     // added the arrow function
//         this.age++;
//     }
// }
// const babar = new Elephant(8);
// setTimeout(babar.birthday, 1000)
// setTimeout(function(){
//     console.log(`Babar's age is ${babar.age}.`)
//     }, 2000)