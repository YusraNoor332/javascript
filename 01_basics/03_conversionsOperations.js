let score = "33"   //number
//let score = "33abc" //Nan
//let score = null //0
//let score = undefined //NaN
//let score = true //1
//let score = false //0
//let score = "Yusra" //NaN


//there is no strict check in js
//this value will be converted on number but it wont be accurate it will NaN (not a number)
//NaN is also a special type

console.log(typeof score);
let valueInNumber = Number(score)//conversion of string into number
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(typeof NaN); //type of NaN is number

let isLoggedIn = 1 //true
//let isLoggedIn = 0  //false
//let isLoggedIn = "yusra"  //true
//let isLoggedIn = ""  //false
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber =33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)