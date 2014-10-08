var app = app || {};

$(function() {
  var contacts = [
    { name: 'Mia', phone_number: '408 826 2769'},
    { name: 'Garbagnati', phone_number: '408 268 4823'},
    { name: 'Umma', phone_number: '408 674 3712'},
    { name: 'Bruce', phone_number: '123 456 7890'}];

    new app.ContactBookView( contacts );
});