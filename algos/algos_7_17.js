add = (a,b) => (a + b)

function reduce(arr, add, initVal){
    for(let i = 0; i < arr.length; i++){
        initVal = add(initVal, arr[i]);
    } return initVal
}

console.log(reduce([9,7,4], add, 0))