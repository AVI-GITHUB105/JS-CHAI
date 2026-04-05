const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
//map me return krna jaruri h nhi to undefined return hoga
// const newNums = myNumers.map( (num) => num + 10 ) // single line me return krna h to curly braces nhi lagayenge
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
//chaning^
console.log(newNums);