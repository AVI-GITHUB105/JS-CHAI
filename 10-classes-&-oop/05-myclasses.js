// ES6

class User { // dirct class likho ab object & function banane ki need nhi protype insertion ke liye
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai= new User('avi', "avi@gmail.com",'123')// new ate hi constructor ko call kardeag
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene jb class nhi use krte the

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User1("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
