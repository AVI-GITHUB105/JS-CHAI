function multipleBy5(num){
    return num*5  // Function definition
}

multipleBy5.power = 2  // ← Adding a property(var) to the function object

console.log(multipleBy5(5));        // 25 (calls the function)
console.log(multipleBy5.power);     // 2 (accesses the property)
console.log(multipleBy5.prototype); // {} (the function's prototype object)

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){// function insert krwarhe h createUser ke prototype me 
    this.score++ // without this pata hi nhi chalega ise kiska value increment krna hai this.score++ means score increment krdo (jiska) jis bhi object ka jo call karega is function ko
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);// same here jiska bhi object call karega is function ko uska score print hoga
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250); // call krne pr new keyword nhi use kiya to undefined aayega kyuki instanse create nhi hua hai isliye this.username and this.score dono undefined honge

chai.printMe()
chai.increment()
chai.printMe();
console.log (typeof createUser)//function
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/