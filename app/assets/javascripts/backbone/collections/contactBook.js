var app = app || {};

app.ContactBook = Backbone.Collection.extend({
  model: app.Contact
});