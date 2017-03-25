contactApp.tableUpdate = function () {
    $('#contactsTbl').html('');
    _.forEach(_.keys(localStorage), function (value) {
        var contact = JSON.parse(localStorage[value]);
        $('#contactsTbl').append('<tr>' +
            '<td>' + contact.firstName + '</td>' +
            '<td>' + contact.lastName + '</td>' +
            '<td>' + contact.phone + '</td>' +
            '<td>' + contact.streetAddress + '</td>' +
            '<td>' + contact.city + '</td>' +
            '<td><button class="contactEditBtn" onclick="contactApp.editContact(' + contact.id + ')">edit</button></td>' +
            '<td><button class="contactDelBtn" onclick="contactApp.deleteContact(' + contact.id + ')">del</button></td>' +
            '</tr>');
    });
}
$(document).ready = contactApp.tableUpdate();
$('#contactsTbl td').attr('class', 'mdl-data-table__cell--non-numeric');