define([
	'backbone',
	'mustache',
	'models/Photoset'
], function(Backbone, Mustache, Photoset) {

	var PhotosetView = Backbone.View.extend({
		model: Photoset,
		template: '<h1>{{ title}}</h1>{{#description}}<p>{{description}}</p>{{/description}}',
		el: $('#content'),

		render: function() {
			this.$el.html(Mustache.render(this.template, this.templateData()));
			return this;
		},

		templateData: function() {
			return this.model.toJSON();
		}

	});

	return PhotosetView;
});
