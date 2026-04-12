let myname = 'avinash    '
console.log(myname.length) // 14
console.log(myname.trim().length) // 7 (removes the leading and trailing whitespace)
// but hum subke liye thorina ye sb likhte rhenge 
//mujhe method chahiye ki console.log(myname.truelength); ye jitne bhi similar caseho uskohandle krle bina hr bar ye likhe myname.trim().length

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){// isse hitesh function sabhi objects me add ho jayega kyuki Object.prototype me add krne se sabhi objects usko inherit krte h
    console.log(`hitesh is present in all objects`);
}

heroPower.hitesh()
myHeros.hitesh()

//array ko powear dejr check krrhe h ki kahi vo object ke pass bhi to nhi ja rhi down to up
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
// and yes esa nhi hota array to object power transfer
myHeros.heyHitesh()
heroPower.heyHitesh()
//path power done |^

// now inhertance (prototyple inheritance)
//old approach
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport inherits from Teacher

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){//sari strings ko super power denrhe h truelength ki
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()//this apne aap current context le leta h 
"hitesh".trueLength()// same here current context globalec se this context lerha h
"iceTea".trueLength()