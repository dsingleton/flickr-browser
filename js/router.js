define([
	'jquery',
	'backbone',
	'views/IndexView',
	'views/PhotoView'
], function($, Backbone, IndexView, PhotoView) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			'':							'index',
			'photo/:id':		'photo'
		},

		index: function() {
			var app_view = new IndexView();
			app_view.render();
		},

		photo: function(id) {
			
			var photo_data = {
				"width": "1632",
				"flickr_id": "2854215656",
				"tags": ["london", "advertising", "billboard", "bethnalgreen", "tfl"],
				"description": "Taken wandering around Bethnal Green",
				"file": "/Users/david/Pictures/flickr/2854215656.jpg",
				"title": "Pumps & Pumps",
				"views": "62",
				"original_url": "http://farm4.staticflickr.com/3027/2854215656_24c9e13467_o.jpg",
				"date_taken": "2008-09-13 18:45:22",
				"height": "1224"
			};
			
			var photo_view = new PhotoView(photo_data);
			photo_view.render();
		}
	});

	var initialize = function() {
		var app_router = new AppRouter();
		Backbone.history.start({pushState: false});
	};

	return {
		initialize: initialize
	};

});
