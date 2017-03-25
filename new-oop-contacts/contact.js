
contactApp.Contact = function (contactArg) {
    this.id = contactArg.id;
    this.firstName = contactArg.firstName;
    this.lastName = contactArg.lastName;
    this.phone = contactArg.phone;
    this.streetAddress = contactArg.streetAddress;
    this.city = contactArg.city;
}

contactApp.createOrEditContact = function (id) {
    if(id == undefined) {
        id = _.random(100000, 999999);
        while (_.has(localStorage, id)) id = _.random(100000, 999999);
    }
    var contactArg = {
        id: id,
        firstName : $('#firstName').val(),
        lastName : $('#lastName').val(),
        phone : $('#phone').val(),
        streetAddress : $('#streetAddress').val(),
        city : $('#city').val()
    }
    var setContact = new contactApp.Contact(contactArg);
    localStorage[id] = JSON.stringify(setContact);
    $('.mdl-textfield__label').css('visibility', 'visible'); //  ******* Label visibility
    contactApp.formReset();
    contactApp.tableUpdate();
}

contactApp.deleteContact = function (key) {
    localStorage.removeItem(key);
    contactApp.tableUpdate();
}

contactApp.editContact = function (key) {
    var currentContact = JSON.parse(localStorage[key]);
    $('#firstName').val(currentContact.firstName);
    $('#lastName').val(currentContact.lastName);
    $('#phone').val(currentContact.phone);
    $('#streetAddress').val(currentContact.streetAddress);
    $('#city').val(currentContact.city);
    $('.mdl-textfield__label').css('visibility', 'hidden');  //  ******* Label visibility
    $('#saveBtn').attr('onclick', 'contactApp.createOrEditContact(' + key + ')');
}

contactApp.formReset = function () {
    $('#contactForm').trigger('reset');
    $('#saveBtn').attr('onclick', 'contactApp.createOrEditContact()');
    $('.mdl-textfield__label').css('visibility', 'visible');   //  ******* Label visibility
}
contactApp.clearAll = function () {
    $('.mdl-textfield__label').css('visibility', 'visible');   //  ******* Label visibility
    localStorage.clear();
    contactApp.formReset();
    contactApp.tableUpdate();
}