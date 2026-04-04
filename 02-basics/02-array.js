const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) array ke andar array include hojayega with[]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// flat use krte hain jab hume nested array ko single array me convert krna hota hai.
//  By default flat method 1 level tak hi flatten karta hai, 
// lekin agar aapko nested array ke andar ke nested array ko bhi flatten karna hai,
//  toh aap flat method me Infinity pass kar sakte hain. Isse wo saare levels ke nested arrays ko flatten kar dega,
//  chahe wo kitne bhi levels ke nested arrays ho.
// but in brackets tna hi no dalna chahiye jtna depth ki need hai
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting define nhi kiya ki like keys se array banao ya value se array banao to empty array dega

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));