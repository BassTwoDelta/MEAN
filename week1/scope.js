// vars are function scoped - that means, if you decalare a var, it only exsists inside the function that it is declard in. So if you have a function, and you decalare a var "name" in the function. This var name inside the function is differnet than the var "name" outside the function. 

// lets are block scoped and they are NOT hoisted. When you "hoist" things you initialize them. 

//callbacks - A callback is a function you call after another function has returned. If something really did something and I wanted when something was done to immediately run some other function... (basically saying run something and then run this over function) Example - function one(), function two()... one(two); 

//AJAX = "asynchronous jacascript and xml" 

//asunchronus means I run this function, and this something has a loop that takes 5 miniutes. If it was syncronous it means I am stuck until the function is done. Asynchronously means you start processing one function, get down to the bottom, I see a loop going, keep the loop running and move on to run something else. And when the loop is finally returned, I will go ahead and jump back and deal with the return statement. 