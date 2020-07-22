function partition(arr){
    var pivot = arr.length -1; 
    for(var i=0, j = i-1; i < pivot; i++){
        if(arr[i] < arr[pivot]){
            j++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[j+1], arr[pivot]] = [arr[pivot], arr[j+1]];
    console.log(arr)
    return pivot
}   

const newArr = partition([2,4,9,2,5,3]); 
console.log(newArr)

function quickSort(arr){
    if (arr.length === 1){
        return arr;
    }
    var pivot = arr.length -1; 
    for(var i=0, j = i-1; i < pivot; i++){
        if(arr[i] < arr[pivot]){
            j++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[j+1], arr[pivot]] = [arr[pivot], arr[j+1]];
    const left= arr.slice(0, j+2); 
    const right = arr.slice(j+2);
    console.log(right)
    console.log(left)

    return arr;
}

quickSort([2,4,9,2,5,3]);