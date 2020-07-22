function add(x,y){
    console.log(x+y);
}

// default variable is a var 
var name = "chris";

//differnce between let and var is let is block scoped, vars are globaly scooped (function scoped)
let othername = "bob";

// const should the same type that it started as. (num stays num, string stays string)
const number = 1234;

// basic loop
// var i = 100; 
// for(i=0; i<10; i++){
//     console.log(i)
//     continue
// }

let float = 6.7

let arr = [8, "bob", float, //anything you want
]

let dict = {
    "key" : 9,
    "name" : "Bob",
    "arr" : arr,
    "float" : float,
    "friend": {
        'name' : 'Carl',
        'name2': 'Peter'
    }
}

// console.log(dict.arr[2])

let user1  = {
    'name':'Garrett',
    'favColor': 'Green',
}

let user2 = {
    'name': 'Brittney',
    'favColor':"Yas",
    'friend' : user1
}

user1.friend = user2 // = user1['friend'] = user2 

// console.log(user1,user2)
// python f srtring = f'{dsomet}sjsjs'
// js 'asdfasdf ${user.name} start with a back tick tick tick! 

function notify(user){
    console.log('The User '+ user.name + ' has a favoritre color of ' + user.favColor)
    console.log(`The User ${user.name} has a favorite color of ${user.faveColor}`) // (equivilant to fstring in python)
}

// if statements 
var i = 1900;
if(i < 10){
    console.log('i is less than 10 for sure. 100% FOR SURE IT IS !!! DO NOT ARGUE');
}
else if(i>100){
    console.log('i is LARGE HENNY')
}

else{
    console.log('i is kinda big')
}

if(true){
    console.log("it's true")
} else console.log("it's false")

while(i<2000){
    console.log(i);
    i += 100;
}