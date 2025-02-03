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

//console.log(typeof score);
let valueInNumber = Number(score)//conversion of string into number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// console.log(typeof NaN); //type of NaN is number

let isLoggedIn = 1 //true
//let isLoggedIn = 0  //false
//let isLoggedIn = "yusra"  //true
//let isLoggedIn = ""  //false
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

let someNumber =33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

//************************** Operations ************************ 
let value = 3
let negValue = -value
//console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2-/);
// console.log(2%2);  //use in cryptography

let str1 = "hello"
let str2 = " yusra"
let str3 = str1 + str2 //concatenation of string
console.log(str3);

console.log("1" + 2);  //12
console.log(1 + "2");  //12
console.log("1" + 2 +2);  //122
console.log(1 + 2 + "2");   //32
/*in case of JS conversions its a rule that if the
first one is string then others will be treated as
string also and if the string is at the end then the starting 
operations will be performed */ 



