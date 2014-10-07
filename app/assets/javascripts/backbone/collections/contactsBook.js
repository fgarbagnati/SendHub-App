var app = app || {};

app.ContactsBook = Backbone.Collection.extend({
  model: app.Contact
});