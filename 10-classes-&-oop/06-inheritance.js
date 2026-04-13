class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User { // extends help to  inherit theproperties of parent by child 
    constructor(username, email, password) {
        super(username)
        //         When using extends, the super keyword is critical: 
        // super(): Used inside a child class constructor to call the parent’s constructor.
        // Rule: You must call super() before you can use the this keyword in a child constructor; otherwise, JavaScript will throw an error.
        // super.methodName(): Used to call specific methods from the parent class from within child class methods.
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()// obviously
chai.logMe()// access yes
const masalchai= new User('masalchai')

masalchai.addCourse();// no access
masalchai.logMe();// yes

console.log(chai === masalchai);//false
console.log(chai === Teacher);//false

console.log(chai instanceof Teacher);
console.log(chai instanceof User);