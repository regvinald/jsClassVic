function addNums(firnum,secnum){
    if((typeof firnum === 'number') && (typeof secnum === 'number')){
        return firnum+secnum;
    }
    else{
        return NaN
    }
}
console.log(addNums(45,45));
console.log(addNums('syo',45));

let user = 'admin'
let password ='1234'
let message = ''
function signIn(user,password){
    if(user === 'admin'&& password === '1234'){
        return message = `welcome ${user} to admin page`;
    }else{
        return message = '404 !!! Page not found'
    }
}
let res = signIn('abc','3435')
console.log(res);
let res2 = signIn('admin','1234')
console.log(res2);

/// Area of a circle
function areaOfACircle(radius){
    const PI = Math.PI;
    let areaOfACircle = Math.sqrt(radius)*PI;
    return Math.round(areaOfACircle);
}
let result = areaOfACircle()
console.log(result);





