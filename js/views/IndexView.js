define([
	'jquery',
	'backbone'
], function($, Backbone) {

	var IndexView = Backbone.View.extend({

		initialize: function() {
			this.render();
		},

		render: function() {
			$("#content").html('Index');
		}

	});

	return IndexView;
});
