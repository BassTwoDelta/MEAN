function fizzBuzz(n){
    if(n < 0){
        return "Parameter must be a positive number"
    }
    for(var i=1; i <= n; i++){
        if(i % 3 && i % 5 == 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 == 0 && i % 5 != 0){
            console.log("Fizz");
        }
        else if(i % 5 == 0 && i % 3 != 0){
            console.log("Buzz");
        }
        else{
            onsole.log(i);
        }
    }
}

fizzBuzz(15);
fizzBuzz(-5);