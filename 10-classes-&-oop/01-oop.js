const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`); //bina this. ke username nhi milega 
        // kyuki this se batate h ki main apne execution context ki baat kr rha hu wrna notdefned ayega
        console.log(this); // isse object print ho jayega hamar context jiske bare me refer ya bbat ho rhi h
    }

}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);// globel execution context print {} aayega node me 
// but in browser window object print hoga kyuki browser me this se window ko refer krte h

// const user2 = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//         console.log(`Username: ${this.username}`); //bina this. ke username nhi milega 
//         // kyuki this se batate h ki main apne execution context ki baat kr rha hu wrna notdefned ayega
//         console.log(this); // isse object print ho jayega hamar context jiske bare me refer ya bbat ho rhi h
//     }

// } //har bar new user ke liye ye code likhna padega to isse avoid krne ke liye hum (class ka use karenge) 
// but abhiidhr classeski baat nhi krrhe funvtion banayenge jise bar bar call krsakte h newparameters ke satha nd data updatea hoga this. {} global EC me

// isme constructor (new) kause karenge taki new instances milti rhi or nay data same function ka use krke apne respective variable me saveho 

//varna is casem econsole.log(userone) se user two ki value print hogi hoga kyuki dono me same function use ho rha h & instance bhi hats why use new for different instances
// const userOne = new User("hitesh", 12, true)
//const userTwo = new User("ChaiAurCode", 11, false)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this//neednhi h kyuki by default return this hi hota h constructor function me but fir bhi likh dete h taki clear ho ki yehi return hoga
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);// construvtor property khudi ke bare me refernece hota h print [Function: User]
// console.log(userOne);
//console.log(userTwo);