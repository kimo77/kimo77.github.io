/**
 * Created by ekoodi on 15.3.2017.
 */

var contacts = [];
contacts = localStorage.contacts ? JSON.parse(localStorage.contacts) : [];
function bodyOnLoad() {

    document.getElementsByTagName('table')[0].innerHTML = '';
    var table = document.getElementsByTagName('table')[0];
    for (var j = contacts.length - 1; j > -1; j--) {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = contacts[j].firstname;
        cell2.innerHTML = contacts[j].lastname;
        cell3.innerHTML = contacts[j].phone;
        cell4.innerHTML = contacts[j].adress;
        cell5.innerHTML = '<button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal" onclick="contactEditorForm(' + contacts[j].id + ')"> <span class="glyphicon glyphicon-pencil"></span> Edit </button>';
        cell6.innerHTML = '<button type="button" class="btn btn-warning btn-sm" onclick="deleteContact(' + contacts[j].id + ')"> <span class="glyphicon glyphicon-remove"></span> Delete </button>';
    }
}

function contactEditorForm(id) {
    for(var  i = 0; i< contacts.length; i++){
        if(contacts[i].id == id){
            $('#editFirstName').val(contacts[i].firstname);
            $('#editLastName').val(contacts[i].lastname);
            $('#editPhone').val(contacts[i].phone);
            $('#editAdress').val(contacts[i].adress);
            $('#editBtn').attr('onclick', 'editContact(' + id + ')');

        }
    }

}

function editContact(id) {
    for(var  i = 0; i< contacts.length; i++){
        if(contacts[i].id == id){
            contacts[i].firstname = $('#editFirstName').val();
            contacts[i].lastname = $('#editLastName').val();
            contacts[i].phone = $('#editPhone').val();
            contacts[i].adress = $('#editAdress').val();
            localStorage.contacts = JSON.stringify(contacts);
            bodyOnLoad();
        }
    }

}

function deleteContact(id){
    for(var  i = 0; i< contacts.length; i++){
        if(contacts[i].id == id){
            contacts.splice(i, 1);
            localStorage.contacts = JSON.stringify(contacts);
            bodyOnLoad();
        }
    }

}

function tableClear() {
    localStorage.clear();
    contacts = [];
    bodyOnLoad();
}
var i = -1;
function addContact() {
    i++;
    contact = {
        id: i,
        firstname: document.getElementsByTagName('input')[0].value,
        lastname: document.getElementsByTagName('input')[1].value,
        phone: document.getElementsByTagName('input')[2].value,
        adress: document.getElementsByTagName('input')[3].value
    };
    if (contact.firstname && contact.lastname && contact.phone && contact.adress) {
        document.getElementsByTagName('form')[0].reset();
        contacts.push(contact);
        localStorage.contacts = JSON.stringify(contacts);
        bodyOnLoad();
    }
}
