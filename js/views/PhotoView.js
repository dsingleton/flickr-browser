define([
	'jquery',
	'backbone',
	'mustache'
], function($, Bacbone, Mustache) {

	var PhotoView = Backbone.View.extend({

		template: '<h2>{{title}}</h2> <img src="{{file}}" /> {{# description}}<p>{{description}}</p>{{/description}}',

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
