var app = app || {};

app.ContactsBookView = Backbone.View.extend({
  el: '#contacts',

  render: function() {
    this.collection.each( function( item ) {
      this.renderContact( item );
    }, this );
  },

  renderContact: function( item ) {
    var contactView = new app.ContactView({
      model: item
    });
    this.$el.append( bookView.render().el );
  }
});