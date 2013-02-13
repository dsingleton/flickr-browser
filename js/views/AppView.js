define(['jquery', 'backbone', 'mustache'],
function($, Backbone, Mustache) {

  var AppView = Backbone.View.extend({
    el: '#flickr-app',
    template: "Hello {{ name }}",

    initialize: function() {
      this.content = $("#content");

      this.render();
    },

    render: function() {
      this.content.html(Mustache.render(this.template, {name: 'Worlds'}));
    }

  });

  return AppView;
});
