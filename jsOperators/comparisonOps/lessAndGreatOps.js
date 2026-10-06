var password = 'Abcd1234' ;
var compassword = 'abcd1234';
var result = password < compassword ;
console.log(result); // true baseed on the unicodes A ..a

var result = password > compassword ;
console.log(result); // false


var result = password <= compassword;
console.log(result); // true

var result = password >= compassword;
console.log(result); // false

var userAge1 = 12;
var userAge2 = 56 ;
var userResult = userAge1 > userAge2
console.log(userResult); // false 

var userAge1 = 120;
var userAge2 = 56 ;
var userResult = userAge1 < userAge2
console.log(userResult); // false 

var userAge1 = 12;
var userAge2 = 12 ;
var userResult = userAge1 >= userAge2
console.log(userResult); // true

var userAge1 = 56;
var userAge2 = 56 ;
var userResult = userAge1 <= userAge2
console.log(userResult);// true





