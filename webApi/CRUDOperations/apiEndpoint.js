let apiEndpoint = "https://jsonplaceholder.typicode.com/users"

var Michael = {
    "id" : "11",
    "username" : "Mike",
    "email" : "mike@smith.biz",
    "phone" : "90008886662",
    "company" : {
        "name" : "Harlow-deck",
        "catchphrase" : "quality production and consistency",
        "bs" : "For a better industry"
    }
}

async function createEmployee(employee){
    let response = await fetch(apiEndpoint,
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(employee)
        }
    )
    return response.json()
}
console.log(createEmployee(Michael))

async function editEmployee (employee, id) {
    let response = await fetch (`${apiEndpoint}/${id}`,
        {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(employee)
        }
)
    return response.json()
}

async function showOneEmployee (id) {
    let response = await fetch (`${apiEndpoint}/${id}`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(employee)
        }
)
    return response.json()
}

async function deleteEmployee(id) {
    let response = await fetch (`${apiEndpoint}/${id}`,
        {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(employee)
        }
)
    return response.json()
}

// createEmployee(Michael)
// .then(data => console.log(data))

editEmployee(Michael ,11)
.then(data => console.log(data))

// showOneEmployee(7)
// .then(data => console.log(data))