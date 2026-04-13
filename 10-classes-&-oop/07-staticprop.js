class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // createId(){ // chahta hu jb bhi koi username aye uske sath ek id bhi attach ho jayea
    //     return `123`
    // }
    
    static createId(){ // createid kai bar esa case hoga jisme  is method ka access har us object ko nhi dena chahte 
    // jo is class ke instanciate hua h so use static
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) //koik rokne wal hi nhi h
// createid kai bar esa case hoga jisme  is method ka access har us object ko nhi dena chahte jo is class ke instanciate hua h

class Teacher extends User {
    constructor(username, email){
        super(username)// super apne saththis call leta h
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
console.log(iphone.createId());// cant access or use