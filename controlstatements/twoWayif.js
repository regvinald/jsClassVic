// Two way if statement :: executes both truly and false part of boolean exprssion 
// Syntax
// if (<Boolean expression >){
//     javascript code
//  }
// else{
//   javascript code 
//   }

if (false){
    console.log('Hello Somebody');
    console.log(2 ** 10);
}else{
    console.log('this is else leg');
    console.log(34 * 5);
}

var userName = 'John'
var userAge = 34
if (userName === 'John' && userAge >= 18){
    console.log('Welcome &{userName} , you can vote');
}else{
    console.log('Please, check your name or Age');
}