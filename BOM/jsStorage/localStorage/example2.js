let person = {
    id: '0001',
    perName : 'peter',
    age : 23,
    dob : new Date(2000, 4, 12).toDateString()
}
// converting JS object to JSON string
localStorage.setItem('person' , JSON.stringify(person))

// converting JSON string to JS object
let user = JSON.parse(localStorage.getItem('person'))
console.log(user.id, user.perName, user.age, user.dob);