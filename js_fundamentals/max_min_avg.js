function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var avg = 0; 
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum = sum + arr[i];
        avg = sum/arr.length;
    }
    return "The miniumu is "+ min +", the maximum is "+ max +", and the average is "+ avg +"."
}