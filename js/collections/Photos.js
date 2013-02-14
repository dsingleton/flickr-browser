define([
	'underscore',
	'backbone',
	'models/photo'
], function(_, Backbone, Photo) {

	var Photos = Backbone.Collection.extend({
		model: Photo
	});

	return Photos;

});
