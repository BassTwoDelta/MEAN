function mySplit(aString) {
    let aArray = [];
    let aWord = "";
    let charAvoid = "!@#$%^&*()_?.,";

    for (let i = 0; i < aString.length; i++) {
        if (charAvoid.includes(aString[i]) && i != aString.length - 1) {
            i++;
        }
        if (aString[i] === ' ') {
            aArray.push(aWord);
            aWord = "";
        } else {
            aWord += aString[i];
        }
    }
    aArray.push(aWord);
    return aArray;
}

function myReverse(aString) {
    aArray = mySplit(aString);
    let aSentence = "";
    for (let j = aArray.length - 1; j >= 0; j--) {
        aSentence += aArray[j];
        if (j != aArray - 1) {
            aSentence += " ";
        }
    }
    return aSentence;
}

console.log(myReverse("Hello it's me! I've been waiting for a long, long time"));