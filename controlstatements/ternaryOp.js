let fname = 'Paul';
fname = 'Paul' ? console.log ('I am paul') : console.log('Name is not Paul');

let age = 12;
let nat = 'algeria';
let message = '';

age >= 18
 ? (message = 'you can vote')
 : nat === 'Nigerian'
 ? (message = 'Too young')
 : (message = 'You are not a nigerian');
console.log(message);

let speed = 10;
let mess = speed >= 120? 'Too fast' : speed >= 80? 'Fast' : 'Ok';
console.log(mess)