define([
	'jquery',
	'backbone',
	'mustache'
], function($, Bacbone, Mustache) {

	var PhotoView = Backbone.View.extend({

		template: "Hello {{ id }}",

		initialize: function(photo) {
			this.photo = photo;
		},

		render: function() {
			$('#content').html(
				Mustache.render(this.template, this.photo)
			);
		}

	});

	return PhotoView;

});
