define([
	'jquery',
	'backbone',
	'app_data',
	'views/PhotosView',
	'views/PhotoView',
	'views/PhotosetView',
	'collections/Photos',
	'collections/Photosets',
	'views/SearchFormView'
], function($, Backbone, AppData, PhotosView, PhotoView, PhotosetView, Photos, Photosets, SearchFormView) {
	
	var allPhotos = new Photos(AppData.getPhotos());
	var allPhotosets = new Photosets(AppData.getPhotosets());

	var AppRouter = Backbone.Router.extend({
		routes: {
			'':										'index',
			'tag/:tag':						'tag',
			'search?q=:query':		'search',
			'photo/:id':					'photo',
			'set/:id':						'set'
		},

		index: function(optional_tag) {
			this.photosList();
		},

		tag: function(tag) {
			this.photosList({
				tag: tag
			});
		},

		search: function(query) {
			this.photosList({
				search: query
			});
		},

		photosList: function(options) {
			var view,
				photos = allPhotos,
				filter;

			options = options || {};

			// @TODO This logic desperately needs to move out of the router and into a model
			// or some methods on the model

			if ('tag' in options) {
				filter = function(photo) {
					return photo.hasTag(options.tag);
				};
			}

			if ('search' in options) {
				filter = function(photo) {
					return photo.get('title').toLowerCase().indexOf(options.search.toLowerCase()) != -1 ||
						photo.hasTag(options.search);
				};
			}

			if (filter) {
				photos = new Photos(allPhotos.filter(filter));
			}
			photos = new Photos(photos.first(20));
			
			photosView = new PhotosView({
				collection: photos
			});
			photosView.render();
		},

		photo: function(id) {
			var photoView = new PhotoView({
				'model': allPhotos.get(id)
			});
			photoView.render();
		},

		set: function(id) {
			var photosetView = new PhotosetView({
				model: allPhotosets.get(id)
			});
			photosetView.render();
		}
	});

	var initialize = function() {
		// @TODO This should live on an initial app view, rather than the router
		new SearchFormView();

		new AppRouter();
		Backbone.history.start({pushState: false});
	};

	return {
		initialize: initialize
	};

});
