function coinChange(cents){
    var q = 0;
    var d = 0; 
    var n = 0;
    var p = 0; 
    var count= 0; 
    for(var i = 0; i < cents-24; i+=25){
        q+=1; 
        count += 25; 
    }

    for(var i = count; i < cents-9; i+=10){
        d+=1;
        count += 10; 
    }

    for(var i = count; count < cents-4; i+=5){
        n+=1;
        count += 5; 
    }

    for(var i = count; count < cents; i++){
        p+=1; 
        count+=5
    }
    var obj = {
        quarters: q, 
        dimes: d, 
        nickles: n, 
        pennies: p
    };
    return obj
}
coinChange(567);