
const table = document.getElementById('userTable')
let nextLocaleId = 11;

function addUserRow(user, isNew) {
    const row = document.createElement('tr');
    if (isNew) row.classList.add('new-row');

    const city = user.address? user.address.city : '';
    const companyname = user.company? user.company.name : '';

    row.innerHTML = 
    '<td>' + user.id + '</td>' +
    '<td>' + user.employeename + '</td>' +
    '<td>' + user.username + '</td>' +
    '<td>' + user.email + '</td>' +
    '<td>' + (user.phone || '') + '</td>' +
    '<td>' + (user.website || '')+ '</td>' +
    '<td>' + city + '</td>' +
    '<td>' + companyname + '</td>';

    tableBody.appendChild(row);
}




const userApi = "https://jsonplaceholder.typicode.com/users"

let employeeName = document.getElementById('employeeName').value;
let username = document.getElementById('username').value;
let email = document.getElementById('email').value;
let phone = document.getElementById('phone').value;
let street = document.getElementById('street').value;
let suite = document.getElementById('suite').value;
let city = document.getElementById('city').value;
let website = document.getElementById('website').value;
let companyname = document.getElementById('companyname').value;
let companyslogan = document.getElementById('companyslogan').value;


let data = {
    "name" : "employeeName",
    "username" : "username",
    "email" : "email",
    "phone" : "phone",
    "street" : "street",
    "suite" : "suite",
    "city" : "city",
    "website" : "website",
    "companyname" : "companyname",
    "companyslogan" : "companyslogan"
}

async function createData(data){
    let response = await fetch(userApi,
        {
          method : "POST",
          headers : {"Content-Type" : application/json},
          body : JSON.stringify(data)
        }
    )
    return response.json()
}

console.log(createData(data));

console.log(employeeName, username, email, phone, street, suite, city, website, company);
