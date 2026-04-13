const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

     orderChai: function(){
        console.log("chai nhi bni");
    }//ye dalo ge to code phat gay wak senario function hi print ho jayega 
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {// ab name iterable nhi h
enumerable: false,  
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {//to resolve code phatgaya wala seen
        
        console.log(`${key} : ${value}`);
    }
}