localStorage.setItem('id', '0001')
localStorage.setItem('name', 'James')
localStorage.setItem('age', '22')
localStorage.setItem('gender', 'Male')

let name = localStorage.getItem('name')
console.log(name);
let id = localStorage.getItem('id')
console.log(id);
let age = localStorage.getItem('age')
console.log(age);

localStorage.removeItem('gender')

localStorage.clear()

let dataLength = localStorage.length
console.log(dataLength);