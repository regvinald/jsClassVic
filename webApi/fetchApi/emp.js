async function getData() {
    let endpoint = "emp.json";
    try {
        let response = await fetch(endpoint);
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
}

async function displayData() {
    let data = await getData()
    let html = ''
    data.forEach(dt => {
        let dataTable = `<div style = 'border: 2px solid'>
        <h2>${dt.id}</h2>
        <h2>${dt.firstName}</h2>
        <h2>${dt.gender}</h2>
        <h2>${dt.salary}</h2>
        </div>`
        html += dataTable
    });

    let container = document.querySelector('.container')
    container.innerHTML = html
}

displayData()