// void function returns no number to the data
function addNum(){
    let fn = 34
    let sn = 56
    let sumRes = fn + sn
    console.log(sumRes);
    
}

function subNum(){
    let fn = 34
    let sn = 56
    let subRes = fn - sn
    console.log(subRes);
    
}
let option = ''
switch(option){
    case '1':
        addNum()
        break;
    case '2':
        subNum()
        break;
    default :
        console.log('Please enter a number between 1 and 2');
                
}