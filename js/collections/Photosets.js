define([
	'backbone',
	'models/Photoset'
], function(Backbone, Photoset) {

	var Photosets = Backbone.Collection.extend({
		model: Photoset
	});

	return Photosets;

});
