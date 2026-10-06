// non void returns data
function withDrawMoney(){
    return 'Money withdrawn successfully'
}
let data = withDrawMoney()
console.log(data);

console.log(data.toUpperCase);
console.log(data[10].toUpperCase);

function getData(){
    return{
        Id : 12 ,
        Name : 'John',
        Age : 34
    }
}
let obj = getData()
console.log(obj);
console.log(obj.Age);
console.log(obj.Name);

function getData2(){
    return new Array(12,13,14,15)
}
let arr = getData2()
console.log(arr);
console.log(arr.push(16,17,18));
console.log(arr);



