/// using function keyword
// function <name of the function>(parameter){
//     javascript code
///  }

// function hoisting and calling
saveMoney();
saveMoney();

// function signature
function saveMoney(){
    console.log('Money saved successfully');
    
} 
// function calling
let data = saveMoney();
console.log(data); // undefined

saveMoney();
// function listening or referring
saveMoney ;
