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
			return this;
		},

		templateData: function() {
			var model = this.model,
				prev = model.collection.prev(model),
				next = model.collection.next(model);

			return _.extend(
				this.model.toTemplateData(),
				{
					'prev': prev ? prev.toTemplateData() : false,
					'next': next ? next.toTemplateData() : false
				}
			);
		}

	});

	return PhotoView;

});
