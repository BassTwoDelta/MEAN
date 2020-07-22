function bracesValid(string){
    const openBrackets = "({[";
    const closingBrackets = ")}]";
    const matchingBrackets = {")": "(", "]" : "[", "}" : "{"}
    const stack = [];
    for(const char of string) {
        if(openBrackets.includes(char)){
            stack.push(char);
        }
        else if(closingBrackets.includes(char)){
            if(stack.length == 0){
                return false;
            }
            if(stack[stack.length -1] == matchingBrackets[char]){
                stack.pop()
            }
            else{
                return false;
            }
        }
    }return true;
}
console.log(bracesValid("{{()}}[]"));
console.log(bracesValid("{(})"));
