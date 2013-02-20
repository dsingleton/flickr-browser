define([
	'jquery',
	'underscore',
	'backbone',
	'mustache',
	'views/photopreviewview'
], function($, _, Bacbone, Mustache, PhotoPreviewView) {

	var PhotosView = Backbone.View.extend({

		tagName: 'ul',

		initialize: function() {
		},

		render: function() {
			_.each(this.collection.models, function(photo) {
        this.$el.append(
					new PhotoPreviewView({model: photo}).render().el
        );
      }, this);
      $('#content').html(this.$el);
      return this;
		}

	});

	return PhotosView;
});
