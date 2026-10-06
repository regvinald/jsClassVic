// all and experisson  must be true  (&& and)
// a     b     a&&b 
// true true   true
// true false  false 
// false true  false 
// false false false 

var elegible = false ;
var required = true ;
var isConfimed = true;
console.log(elegible && required);// false 

var elegible = true ;
    required = true ;
console.log(elegible && required); // true

console.log(elegible && required && isConfimed);// true


