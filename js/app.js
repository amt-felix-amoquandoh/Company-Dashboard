function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
}

function readFormData(){
    formData = {};
    formData["company"]= document.getElementById("inputCompany").value;
    formData["market"] = document.getElementById("inputMarket").value;
    formData["location"] = document.getElementById("inputLocation").value;
    formData["joined"] = document.getElementById("inputJoined").value;
    formData["date"] = document.getElementById("inputDate").value;
    return formData;  
}

// function editFormData(){
//     formData = {};
//     formData["company"]= document.getElementById("editCompany").value;
//     formData["market"] = document.getElementById("editMarket").value;
//     formData["location"] = document.getElementById("editLocation").value;
//     formData["joined"] = document.getElementById("editJoined").value;
//     formData["date"] = document.getElementById("editDate").value;
//     return formData;  
// }

function insertNewRecord(data){
    var table = document.getElementById("companies").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.company;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.market;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.location;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button>Edit</button><button>Delete</button>`;
}