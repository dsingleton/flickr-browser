define([
	'jquery',
	'backbone',
	'app_data',
	'views/IndexView',
	'views/PhotoView',
	'collections/Photos',
	'views/SearchFormView'
], function($, Backbone, AppData, IndexView, PhotoView, Photos, SearchFormView) {
	
	var allPhotos = new Photos(AppData.getPhotos());

	var AppRouter = Backbone.Router.extend({
		routes: {
			'':										'index',
			'tag/:tag':						'tag',
			'search?q=:query':		'search',
			'photo/:id':					'photo'
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
			
			view = new IndexView({
				collection: photos
			});
			view.render();
		},

		photo: function(id) {
			var photo_view = new PhotoView({
				'model': allPhotos.get(id)
			});
			photo_view.render();
		}
	});

	var initialize = function() {
		var app_router = new AppRouter();
		Backbone.history.start({pushState: false});

		// @TODO This should live on an initial app view, rather than the router
		new SearchFormView();
	};

	return {
		initialize: initialize
	};

});
