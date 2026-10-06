// function fullname(){
//     return{
//         firstName : 'Ephraim',
//         secondName : 'Markus'
//     }
// }
// let obj = fullname()
// console.log(obj);

// function fullname2(fn,sn){
//     return fn+ sn

// }
// let res = fullname2('mark','ephraim')
// console.log(res);

// function formatNames(firstName , secondName){
//     return `${firstName.toUpperCase()} ${secondName.toUpperCase()}`
// }
// let Name = formatNames('MaRk','MARkus')
// console.log(Name);

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i <str.length; i++){
        str[i] = str [i].charAt(0).toUpperCase()+ str [i].slice (1);
    }
    return str.join(' ');
    
}
let res2 = titleCase('MaRk EPHraim' )
console.log(res2);

