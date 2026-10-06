var name = 'John'
var age = 23
var state = 'lagos'
// String concatenation
console.log('My name is' + name + ' My age is' + age +  ' I live in ' + state)

//Template literal
console.log( `My name is ${name.toUpperCase()} my age is ${age} years old` )
var dob = new Date(2000,1,18)
console.log(`my date of birth ${dob.toDateString()}`)