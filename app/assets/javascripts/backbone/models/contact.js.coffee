class App.Models.Contact extends Backbone.Model
  paramRoot: 'contact'

  defaults:

class App.Collections.ContactsCollection extends Backbone.Collection
  model: App.Models.Contact
  url: '/contacts'
