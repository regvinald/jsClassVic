let url = 'https://api.restful-api.dev/objects'

var samsung = {
    "id" : 20,
    "name" : "Samsung S27 Ultra",
    "data" : {
        "Capacity" : "512 Gb",
        "Screen size" : 6.62,
        "Generation" : "7th",
        "Price" : "2345.89"
    }
}

async function createPhone(phone){
    let response = await fetch(url,
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(phone)
        }
    )
    return response.json()

}
console.log(createPhone(samsung))

async function editPhone(phone, id){
        let response = await fetch(`${url}/${id}`,
        {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(phone)
        }
    )
    return response.json()
}

async function showOnePhone(id){
    let response = await fetch(`${url}/${id}`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        }
    )
    return response.json()
}

async function deletePhone(id){
    let response = await fetch(`${url}/${id}`,
        {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            },
        }
    )
    return response.json()
}


//  createPhone(samsung)
//  .then(data => console.log(data))

//  editPhone(samsung, 'ff808181a09d98f701a0aea8814025da')
//  .then(data => console.log(data))

//  showOnePhone(6)
//  .then(data => console.log(data))

// deletePhone('ff808181a09d98f701a0aea8814025da')
// .then(data => console.log(data))


