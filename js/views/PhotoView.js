define([
	'jquery',
	'backbone',
	'mustache'
], function($, Bacbone, Mustache) {

	var PhotoView = Backbone.View.extend({

		template: $('#template-PhotoView').text(),

		initialize: function() {
			
		},

		render: function() {
			$('#content').html(
				Mustache.render(this.template, this.model.attributes)
			);
		}

	});

	return PhotoView;

});
