define([
	'underscore',
	'backbone',
	'models/photo'
], function(_, Backbone, Photo) {

	var Photos = Backbone.Collection.extend({
		model: Photo,

		// Borrowed from:
		// https://github.com/jgoulah/backbone-collection-iterator/blob/master/backbone-collection-iterator.js
		next: function(model) {
			var index = this.indexOf(model) + 1;
        return index <= _.size(this) ? this.at(index) : false;
    },

    // return the previous model or the end if at the beginning
    prev: function(model) {
        var index = this.indexOf(model) - 1;
        return index > -1 ? this.at(index) : false;
    }
	});

	return Photos;

});
