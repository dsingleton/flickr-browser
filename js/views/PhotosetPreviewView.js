define([
	'jquery',
	'backbone',
	'mustache'
], function($, Backbone, Mustache){
	var PhotosetPreviewView = Backbone.View.extend({

		template: $('#template-PhotosetPreviewView').text(),

		tagName: 'li',
		className: 'photoset-preview',

		render: function() {
			this.$el.html(Mustache.render(this.template, this.templateData()));
			return this;
		},

		templateData: function() {
			return this.model.toTemplateData();
		}

	});

	return PhotosetPreviewView;
});
