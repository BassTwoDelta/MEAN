function binarySearch(arr, n){
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        let midIndex = Math.floor((start + end)/2);

        if(arr[midIndex] === n){
            return console.log(midIndex);
        }

        else if(arr[midIndex] < n){
            start = midIndex + 1;
        }
        else{
            end = midIndex - 1; 
        }
    }
    return console.log(-1)
}

binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93);
binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15);