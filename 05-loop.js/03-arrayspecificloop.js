// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
// for (const key of map) {
//     console.log(key); isse se key aur value dono aayenge
// }

for (const [key, value] of map) { // isse destructure kar ke key aur value alag alag le sakte h
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

// }
    // isse error aayega kyuki object iterable nahi hota 
    // jaise array me kar sakte h, map me kar sakte h, 
    // set me kar sakte h, lekin object me nahi kar sakte h