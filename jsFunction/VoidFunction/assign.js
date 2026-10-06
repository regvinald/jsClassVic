function multiply(){
    let fn = 34
    let sn = 56
    let multiply = fn * sn
    console.log(multiply);
    
}

function division(){
    let fn = 100
    let sn = 56
    let division = fn / sn
    console.log(division);
    
}
let option = '2'
switch(option){
    case '1':
        multiply()
        break;
    case '2':
        division()
        break;
    default :
        console.log('Please enter a number between 1 and 2');
                
}