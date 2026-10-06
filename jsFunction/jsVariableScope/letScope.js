//let
// Introduced in ES6(2015)
// Block-scope (only exists inside {} where declared) not hoisted but initialized
// (in temporal dead zone untill declaration line.
// can be updated but not re declared in the same scope//

function hellApp() {
    console.log(userName); // refrence error not hoisted
    let userName = 'Dami';
    if (true){
        let userName = 'Temi';
        console.log(userName); // temi
        
    }
}
//     console.log(userName); // Dami
//     console.log('Outside Block' + userName) // refrenceError (not hoisted)
//  hellApp();   