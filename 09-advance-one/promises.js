const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve();
    }, 1000)
})

promiseOne.then(function(){//resolve function automatically argument receive krta hai 
// jab promise resolve hota hai to uska result then ke andar function me receive hota hai
    console.log('Promise consumed');
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

//5:51 ho sakta h network se koi data aya ho to use bhi parse krna padega to uske liye bhi promise ka use kar sakte hai
//function ne bahoot sara kaam kiya network se file system se kuch data laya but eventually .then function me sara kam kaaran hoga 
const promiseThree = new Promise(function (resolve, reject) 
{
    setTimeout(function(){
        //data pass krne ke liye resolve ka use karenge jada tr object hi dete h ({}) bracket me
        resolve({name: "avinash", age: 22})//parameters pass krne ke liye resolve ka use karenge 
    }, 1000)
})

promiseThree.then(function (user) {// user (superman) me resolve ke andar jo data pass kiya hai wo receive hoga
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong') // incase of error = true this will print or eececute
        }
    }, 1000)
})

//promiseFour.then().catch() (.then se value lelunga .ctach se error le lunga)
//but ek step age chalte h callback hell avoid kese kare
promiseFour
 .then((user) => {
    console.log(user);// incase of error = false this will print or execute
    return user.username
})
.then((username) => {// did chaining to get return value of username from previous then
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))// usekrte h ki bhai finally kya hua vo bata do

// upar ka sb basic tha

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true//error =true,async await direct catch ko handle nhi kr pa rha
        //  with out try catch so error a rha console m
        //incase of false ke sath console me error nhi a rha apne aap await se then ki value le rha h
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: js went wrong') 
        }

    }, 1000)
})
//just then ne value le li h but error ko handle nhi kr pa rha h
// async function consumePromiseFive(){
    
//         const response = await promiseFive
//         console.log(response);
// }
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {//  yah pr error rejct ki value le rha hai
        console.log(error);///gracefully handle krne ke liye try catch ka use karenge async await ke sath
    }
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')// ye code endme likha ha phir bhi pehle isi ka print hoga jbki uprwalo pr async await likh hai
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
