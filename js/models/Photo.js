define([
	'backbone'
], function(Backbone) {

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
		}
		
	});

	return PhotoModel;
});
