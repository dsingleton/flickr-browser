define(['jquery', 'underscore', 'backbone'],
function($, _, Backbone) {

  var AppView = Backbone.View.extend({
    el: '#flickr-app',

    initialize: function() {
      this.content = this.$("#content");

      this.render();
    },

    render: function() {
      this.content.html('fooooooo');
    }

  });

  var initialize = function(){

    console.log($, _, Backbone);
    var App = new AppView();
  };

  return {
    initialize: initialize
  };

});
