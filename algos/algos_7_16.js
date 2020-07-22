//string = aaaaabbbbb

function encode(str){
    let short = ""
    let lastPos = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) != str.charAt(i+1)){
            console.log(i, ' ', lastPos)
            short = short + str.charAt(i) + ((i+1) - lastPos)
            lastPos = i+1;
        }

    }return short
}

console.log(encode("aaaaabbbbb"));

function decode(str){
    let long = ""; 
    for (let i=0; i <= str.length; i++){
        for(let j=0; j <= str.charAt(i+1)-1; j++){
            long = long + str.charAt(i)
        }
        i++
    }return long
}

console.log(decode("a5b5"));
console.log(decode("b9a2a4c5f4"))