function userApp(userName = 'john'){
    if (userName === 'john'){
        return `Hello ${userName}`
    }
    return `Hello Geust`
}
let userMessage = userApp()
console.log(userMessage);

let guest = userApp('peter')
console.log(guest);

