//Var
// Old way of declaring variables(before es6/2015
// Function-scoped(visible inside the function where declared, not blocked scope).
// Hoisted: Declaration is moved to the top of the scope, initialized with undefined 
// can be re-declared and updated in the same function 
// var userName = 'peter';
function hellApp(){
    // console.log(userNmae); // undefined (hoisting)
    var userName = 'Dami'
        console.log(userName);
    if (true){
        var userName = 'Temi'
        console.log(userName);  /// Temi
        
    } 
    console.log(userName); //temi
       
        
} 
console.log('My name is' +userName);
hellApp()
console.log('His name is' + userName);

