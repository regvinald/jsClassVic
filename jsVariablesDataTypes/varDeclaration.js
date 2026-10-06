/// A variable is a placeholder in RAM to hold value
/// var keyword == Global scope (function scope)
// var userName = 'Paul' 
// function info (){
//     userName = 'Ann'
//     console.log(userName);

// }
// info()
// console.log(userName)
/// let keyword == Block scope 
function info (){
    let myName = 'Ephy'
    myName = 'Ann'
    console.log(myName);
}
info()
console.log(myName);

/// Const keyword == Block Scope ...uses capital letter (MYNAME)
const user = 'Paul'
function info (){
    const MYNAME = 'Ann'
    console.log(MYNAME);
}
info()
console.log(MYNAME)
// Variable naming convention 
//1, you cant use keywords like (const let)
// let const = 30 instead use let _const =30

//2, Do not use special characters (@#$%&*)
//3, Variable name cannot start with numbers but can contain number 
const user1234 = ''
//4, variable name must make sense or describe the usage 
let empName = 'JOHN DOE'
const EmployeeID = '123456'
let StudentAge = 25


/// Data type means value type
//primitive types (string number boolean null undefined symbol)

//object or reference types (object function class datetime arrays )

