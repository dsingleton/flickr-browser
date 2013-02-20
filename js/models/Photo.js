define([
	'backbone',
	'underscore'
], function(Backbone, _) {

	var PhotoModel = Backbone.Model.extend({

		initialize: function() {
			_.bindAll(this, 'url', 'toTemplateData');
		},

		url: function() {
			return 'photo/' + this.id;
		},

		toTemplateData: function() {
			var extra_attrs = {
				url: this.url()
			};
			return _.extend(this.toJSON(), extra_attrs);
		},

		hasTag: function(tag) {
			return _.contains(this.get('tags'), tag);
		}
		
	});

	return PhotoModel;
});
