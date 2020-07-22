function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
            console.log(left)
        } else {
            results.push(right.shift());
            console.log(right)
        }
    }
    return [...results, ...left, ...right];
}

mergeSort([4,5,6,74,43,57,23,45,78,98,53,45,42,1,2,6,7]);