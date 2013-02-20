define([
	'backbone'
], function(Backbone) {

	var PhotoSet = Backbone.Model.extend({
		defaults: {
			title: 'Untitled',
			description: ''
		}
	});

	return PhotoSet;
});
