function union(arr1,arr2){
    let i =0;
    let j =0;
    let newArr=[];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            newArr.push(arr[i])
            i++;
        }
        else if(arr1[i] > arr2[j]){
            newArr.push(arr2[j])
            j++;
        }
        else{
            newArr.push(arr1[i])
            j++;
            i++;
        }
    }
    while(i< arr1.length){
        newArr.push(arr1[i])
        i++;
    }
    while(j < arr2.length){
        newArr.push(arr2[j])
        j++;
    }
    return newArr
}

// function uniteUnique(...arr) {
//     return arr.reduce((a, c)=>a.concat(c.filter(v => a.indexOf(v) == -1)),[]);
// }

console.log(union([1,2,2,2,7], [1,2,2,2,6,6,7]))