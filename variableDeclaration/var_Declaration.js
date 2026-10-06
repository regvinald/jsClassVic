// A variable is a place holder in Ram to hold a value
// var keyword === Function scope
var userName = 'paul'// old approach
function info(){
    userName = 'ANN'
    console.log(userName);
    
}
info()
console.log(userName);

// let keyword === Block scope
function info(){
    let myName = 'kola'
    myName = 'Ann'
    console.log(myName);
    
}
info()
console.log(myName);

// const keyword == block scope
const user = 'Peter'
function info() {
    const MYNAME = 'Ann'
    console.log(MYNAME);
}
info()
console.log(myName)
// 1. do not use keywords
// let const == 30
let _class = 'My class'
const _while = 'some data'

// do not use special characters in your varaiable
// variable name cannot start with numbers
// your variable must describe your usage
let empName = 'Peter doe'
const empId = '12345'

