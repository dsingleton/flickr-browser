define([
	'backbone'
], function(Backbone) {

	var Photoset = Backbone.Model.extend({
		defaults: {
			title: 'Untitled',
			description: ''
		},

		initialize: function() {
			_.bindAll(this, 'url', 'toTemplateData');
		},

		url: function() {
			return 'set/' + this.id;
		},

		toTemplateData: function() {
			var extra_attrs = {
				url: this.url()
			};
			return _.extend(this.toJSON(), extra_attrs);
		}

	});

	return Photoset;
});
