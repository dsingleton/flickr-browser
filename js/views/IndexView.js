define([
	'jquery',
	'underscore',
	'backbone',
	'mustache'
], function($, _, Backbone, Mustache) {

	var IndexView = Backbone.View.extend({

		template: $('#template-IndexView').text(),
		el: $('#content'),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(Mustache.render(this.template, this.templateData()));
		},

		templateData: function() {
			// Messy. Each preview photo should be it's own sub view, but this works for v1
			var photos = _.map(this.collection.models, function(photo) {
				return _.extend(photo.attributes, {
						url: photo.url()
					}
				);
			});

			return {
				photos: photos
			};
		}

	});

	return IndexView;
});
