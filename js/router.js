define([
	'jquery',
	'backbone',
	'views/IndexView',
	'views/PhotoView',
	'collections/Photos',
	'flickr_photo_data'
], function($, Backbone, IndexView, PhotoView, Photos, flickr_photo_data) {

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
			
			// Transform our sample data into a simpler subset with a predictable and
			// continious, id-range for testing.

			// @TODO: Move into it's own transformer/data access module
			flickr_photo_data = _.map(flickr_photo_data, function(photo, key) {
				return {
					id: key + 1,
					file: photo.file,
					title: photo.title,
					description: photo.description,
					tags: photo.tags,
					date_taken: photo.date_taken
				};
			});

			photos = new Photos(flickr_photo_data);

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
