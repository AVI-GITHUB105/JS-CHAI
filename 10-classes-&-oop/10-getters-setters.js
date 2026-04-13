//In JavaScript classes, getters and setters are special methods that look like properties from the outside. They allow you to execute logic (like validation or formatting) when a value is read or written.
class User {
    constructor(email,password){
        this.email=email;
        this.password = password
    }

     get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password() {
        // return this._password.toUpperCase()
        return ` ${this._password}hitesh`
    }
    set password(value){//set krte time issue a rha h this.password = value bcz of race condition
        this._password = value;//ab varcahnge ye (_) lagane pr set wal problem sove hogay but get me problem show hoga set ke badd get
    }
}


const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);

console.log(hitesh.email);