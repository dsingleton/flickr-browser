define([
	'jquery',
	'backbone',
	'app_data',
	'views/IndexView',
	'views/PhotoView',
	'collections/Photos'
], function($, Backbone, AppData, IndexView, PhotoView, Photos) {
	
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
				photos = allPhotos;

			options = options || {};

			if (!_.isEmpty(options)) {
				photos = new Photos(photos.filter(function(photo) {
					if ('tag' in options) {
						return _.contains(photo.get('tags'), options['tag']);
					}
					else if ('search' in options) {
						return photo.get('title').indexOf(options['search']) != -1;
					}
				}));
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
	};

	return {
		initialize: initialize
	};

});
