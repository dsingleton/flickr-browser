define([
	'jquery',
	'backbone',
	'mustache'
], function($, Bacbone, Mustache) {

	var PhotoView = Backbone.View.extend({

		template: $('#template-PhotoView').text(),
		el: $('#content'),

		initialize: function() {
		},

		render: function() {
			this.$el.html(Mustache.render(this.template, this.templateData()));
		},

		templateData: function() {
			var photo = this.model,
				photos = this.model.collection;

			return _.extend(
				this.model.toJSON(),
				{
					'next': this.model.collection.at(this.model.id).url()
				}
			);
		}

	});

	return PhotoView;

});
