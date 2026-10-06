const users = [
    {
        id : '001' ,
        userName : 'Paul',
        userAge : 23,
        userSalary : 12345.89
    },
     {
        id : '002' ,
        userName : 'Mary',
        userAge : 25,
        userSalary : 12345.89
    },
     {
        id : '003' ,
        userName : 'John',
        userAge : 27,
        userSalary : 12345.89
    },
     {
        id : '004' ,
        userName : 'Sam',
        userAge : 28,
        userSalary : 12345.89
    },
     {
        id : '005' ,
        userName : 'Ann',
        userAge : 29,
        userSalary : 12345.89
    }
]
users.forEach(
    (user)=>{
        user.id = '008'
        user.userName = 'Matt'
        user.email = 'abb@gmail.com' 
       }
)
console.log(users);
