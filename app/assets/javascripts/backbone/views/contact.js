var app = app || {};

app.ContactView = Backbone.View.extend({
  tagName: 'div',
  className: 'contactsContainer',
  template: _.template( $( '#contactTemplate' ).html() ),

  render: function() {
    this.$el.html( this.template( this.model.attributes ) );
    return this;
  }
});