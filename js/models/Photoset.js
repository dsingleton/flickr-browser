define([
	'backbone',
	'collections/Photos'

], function(Backbone, Photos) {

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
				url: this.url(),
				size: this.get('photos').length
			};
			return _.extend(this.toJSON(), extra_attrs);
		}

	});

	return Photoset;
});
