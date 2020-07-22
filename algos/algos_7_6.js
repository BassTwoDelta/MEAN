// Bubble Sort 
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

bubbleSort([2,4,5,12,78,97,34,2,1,4,5,6]);

// Selection Sort 
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
    for (let j = i+1; j <arr.length; j++) {
        if (arr[j] < arr[indexOfMin]) {
            indexOfMin = j;
        }
    }
        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }
    return arr;
}

selectionSort([2,4,5,12,78,97,34,2,1,4,5,6]);