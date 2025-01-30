const accountId = 123456 //constant declaration (can't be changed)
//variable declaration
let accountEmail = "yusra@gmail.com"//good and the correct approach
var accountPasssword = "142329"
accountCity = "lahore" //also a way to declare a variable but not a good approach
let accountState;//this will show an output as undefined
// accountId = 2
accountEmail = "yusra123@gamil.com"
accountPasssword = "123456"
accountCity = "Islamabad"
console.log(accountId);
/*
perfer not to use var
because issue in block scope and functional scope 
*/
console.table([accountEmail,accountId ,accountPasssword ,accountCity , accountState])
