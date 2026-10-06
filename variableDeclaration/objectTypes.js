let myObj = new Object()
myObj['id']='001'
myObj['username']= 'john'
myObj['userAge']= 23
console.log(myObj);

let userInfo={
    id : '001',
    userName : 'john',
    userAge : 23,
    status : true
}
console.log(userInfo);

let dob = new Date(2000 , 2 ,19)
console.log(dob.toDateString());

let dob2 = new Date(2000 , 2 ,19,12, 34 ,12 , 1234)
console.log(dob.toString());

let users = new Array('peter', 'paul', 'matt', 'ann')
console.log(users);

let users2 = ['peter', 'paul', 'matt', 'ann']
console.log(users2);



