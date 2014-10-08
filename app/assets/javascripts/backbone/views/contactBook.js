var app = app || {};

app.ContactBookView = Backbone.View.extend({
  el: '#contactsContainer',

  initialize: function( initialContacts ) {
    this.collection = new app.ContactBook( initialContacts );
    this.template = _.template( $( '#contactTemplate' ).html() )
    this.render();
  },

  render: function() {
    this.collection.each( function( item ) {
      this.renderContact( item );
    }, this );
  },

  renderContact: function( item ) {
    var contactView = new app.ContactView({
      model: item
    });
    this.$el.append( contactView.render().el );
  }
});