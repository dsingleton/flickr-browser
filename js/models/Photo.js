define([
	'backbone'
], function(Backbone) {

	var PhotoModel = Backbone.Model.extend({

		initialize: function() {
			_.bindAll(this, 'url');
		},

		url: function() {
			return '#photo/' + this.id;
		}
		
	});

	return PhotoModel;
});
