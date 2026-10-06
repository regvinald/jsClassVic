// Or all expression needs one side to be true all would be true when false false is false
// a     b     a||b 
// true true   true
// true false  true 
// false true  true 
// false false false 

var elegible = true ;
var required = false ;
var isConfimed = true;
console.log(elegible || required);// true

var elegible = false ;
    required = false ;
console.log(elegible && required); // false

console.log(elegible && required && isConfimed);// true


