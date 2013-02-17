define([
	'jquery',
	'backbone',
	'app_data',
	'views/IndexView',
	'views/PhotoView',
	'collections/Photos'
], function($, Backbone, AppData, IndexView, PhotoView, Photos) {
	
	var photos = new Photos(AppData.getPhotos());

	var AppRouter = Backbone.Router.extend({
		routes: {
			'':							'index',
			'photo/:id':		'photo'
		},

		index: function() {
			var recent_photos = new Photos(photos.first(20));
			var app_view = new IndexView({
				collection: recent_photos
			});
			app_view.render();
		},

		photo: function(id) {
			var photo_view = new PhotoView({
				'model': photos.get(id)
			});
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
