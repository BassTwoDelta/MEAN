function bubbleSort(arr){
    for(let i =0; i< arr.length; i++) {
        for(let j=0; j <(arr.length - i - 1); j++){
            if (arr[j] > arr[j+1]) {
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser; 
            }
        }
    }
    return arr
}


// function printArray(arr){
//         for(var i=0; i<arr.length; i++){
//             console.log(arr[i]);
//         }
//     }

// // Big O Notation = O(n) 

// function findNth(arr, n){
//         console.log(arr[n]);
//     }

// // Big O Notation = O(1)

// function halving(n){
//     var count = 0;
//     while(n > 1){
//         n = n/2;
//         count++;
//     }
//     return count;
// } 

// // Big O Notation = O(1)

// function identityMatrix(n){
//     var matrix = [];
//     for(var i=0; i < n; i++){
//         var row = [];
//         for(var j=0; j < n; j++){
//             if(j == i){
//                 row.push(1);
//             }
//             else{
//                 row.push(0);
//             }
//         }
//         matrix.push(row);
//     }
//     return matrix;
// }

// // Big O Notation = O(n**2)