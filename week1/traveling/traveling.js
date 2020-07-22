var tigger = {character: "Tigger"}; 
var pooh = {character: "Winne the Pooh"}
tigger.north = pooh; 
pooh.south = tigger; 

var piglet = {character: "Piglet"};
var bees = {characger: "Bees"}; 
pooh.west = piglet;
pooh.east = bees;

var cr = {character: "Christopher Robin"};
var owl = {character: "Owl"};
var rabbit = {character: "Rabbit"};
var gopher = {character: "Gopher"};
cr.south = pooh;
cr.west = owl; 
cr.east = rabbit; 
rabbit.east = gopher; 

var kanga = {character: "Kanga"};
var eeyore = {character: "Eeyore"};
var heffalumps = {character: "heffalumps"}; 
cr.north = kanga;
kanga.north = eeyore; 
eeyore.east = heffalumps;



var player = {
    location : tigger
}

function move(direction){
    player = player.location.direction;
    console.log(`You are now at ${player.location}'s house`)
}