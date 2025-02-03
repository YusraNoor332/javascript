// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//try to compare same datatypes otherwise the results are unpredictable
console.log("2" > 1);//true
console.log(null==0);//false
console.log(null<1);//true
console.log(null>0);//false
console.log(null>=0);//true //here the null is converted into 0

console.log(undefined==0);//false
console.log(undefined<1);//false
console.log(undefined>0);//false
console.log(undefined>=0);//false //here the undefined is converted into NaN

//=== is used for strict comparison
console.log("2"==2);//true
console.log("2"===2);//false








