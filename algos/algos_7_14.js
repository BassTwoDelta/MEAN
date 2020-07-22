function rotateString(str, n){
    let temp = str.substring(str.length - n);
    return (temp+str).slice(0,str.length)
}

console.log(rotateString("Boris Godunov", 5));

function isRotation(str1, str2){
    if(str1.length != str2.length){
        return false;
    }

    const temp = str1 + str1;
    console.log(temp)

    return temp.includes(str2)
}

    

console.log(isRotation("Boris Godunov", "dunovBoris Go"));