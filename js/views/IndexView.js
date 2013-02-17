define([
	'jquery',
	'underscore',
	'backbone',
	'mustache',
	'views/photopreviewview'
], function($, _, Bacbone, Mustache, PhotoPreviewView) {

	var IndexView = Backbone.View.extend({

		template: $('#template-IndexView').text(),
		tagName: 'ul',

		initialize: function() {
		},

		render: function() {
			_.each(this.collection.models, function(photo) {
        $(this.$el).append(new PhotoPreviewView({model: photo}).render().el);
      }, this);
      $('#content').html(this.$el);
      return this;
		}

	});

	return IndexView;
});
