define(['jquery', 'backbone'],
function($, Backbone) {

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

  return AppView;
});
