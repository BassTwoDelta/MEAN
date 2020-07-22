var tigger = {character: "Tigger"}
var pooh = {character: "Winne the Pooh"}
var piglet = {character: "Piglet"};
var bees = {character: "Bees"};
var cr = {character: "Christopher Robin"};
var owl = {character: "Owl"};
var rabbit = {character: "Rabbit"};
var gopher = {character: "Gopher"};
var kanga = {character: "Kanga"};
var eeyore = {character: "Eeyore"};
var heffalumps = {character: "heffalumps"}; 
tigger.north = pooh; 
pooh.south = tigger; 
pooh.west = piglet;
pooh.east = bees; 
pooh.north = cr;
piglet.east = pooh;
piglet.north= owl;
bees.west = pooh;
bees.north = rabbit; 
cr.south = pooh;
cr.west = owl;
cr.north = kanga; 
cr.east = rabbit; 
owl.south = piglet; 
owl.eat = cr; 
rabbit.west = cr;
rabbit.south = bees; 
rabbit.east = gopher;
kanga.south = cr; 
kanga.north = eeyore;
eeyore.south = kanga; 
eeyore.east = heffalumps;
heffalumps.west = eeyore;



// var tigger = { character: "Tigger" }; // start with just the character attribute
// var pooh = { character: "Winnie the Pooh" };
// tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
// pooh.south = tigger;

// var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
// piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
// tigger.north.west = piglet;          // Follow Tigger's north attribute to a location in memory
//                                     // Assign that object's west attribute to piglet