define([
	'jquery',
	'backbone',
	'mustache',
	'collections/Photosets',
	'views/PhotosetPreviewView'
], function($, Backbone, Mustache, Photosets, PhotosetPreviewView) {

	var PhotosetsView = Backbone.View.extend({
		model: Photosets,
		
		tagName: 'ul',
		className: 'photosets',

		render: function() {
			this.collection.each(function(photoset) {
				this.$el.append(
					new PhotosetPreviewView({model: photoset}).render().el
				);
			}, this);
			$('#content').html(this.$el);
			return this;
		}

	});

	return PhotosetsView;
});
