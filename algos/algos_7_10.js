function radixSort(arr) {
    const maxNum = Math.max(...arr) * 10; 
    console.log(maxNum);
    let divisor = 10; 
    while (divisor < maxNum) {
        let buckets = [...Array(10)].map(() => []);
        console.log(buckets);

        for (let num of arr){
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }

        arr = [].concat.apply([], buckets);
        divisor *= 10; 
    }

    return arr; 
}

radixSort([5,3,88,235,65,23,4632,234]);