const {fruit,veggies,tastes} = require('./fruit')

console.log(fruit, veggies)
let items = fruit.concat(veggies)
for(let i of items){
    console.log(tastes(i))
}
