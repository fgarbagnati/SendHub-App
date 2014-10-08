var app = app || {};

app.ContactBookView = Backbone.View.extend({
  el: 'body', //'#contactsContainer',

  initialize: function() {
    this.collection = new app.ContactBook();
    _.bindAll(this);
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
  },

  events:{
    'click #addNewContact':'addContact'
  },

  addContact: function( e ) {
    e.preventDefault();

    var formData = {};

    $( '#addContact div' ).children( 'input' ).each( function( i, el ) {
      if( $( el ).val() != '' )
      {
        formData[ el.id ] = $( el ).val();
      }
    });
    this.collection.add( new app.Contact( formData ))
  }
});