const User = {
    _email: 'h@hc.com',// _undersccore means private
    _password: "abc",


    get email(){//but get set lagate hi mayne khatam ho jata h kyuki ye jo process overwrite kr rha hu
    //  usko memory se lekr ane ka or vaps chor ke ane ka
        return this._email.toUpperCase()// _email variable h
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);