var app = app || {};

app.Contact = Backbone.Model.extend({
  defaults: {
    name: 'Name',
    phone_number: 'PhoneNumber'
  }
})