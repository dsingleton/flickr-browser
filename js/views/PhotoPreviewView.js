define([
	'jquery',
	'backbone',
	'mustache'
], function($, Backbone, Mustache){
	var PhotoPreviewView = Backbone.View.extend({

		template: $('#template-PhotoPreviewView').text(),

		tagName: 'li',
		className: 'photo-preview',

		render: function() {
			this.$el.html(Mustache.render(this.template, this.templateData()));
			return this;
		},

		templateData: function() {
			return this.model.toTemplateData();
		}

	});

	return PhotoPreviewView;
});
