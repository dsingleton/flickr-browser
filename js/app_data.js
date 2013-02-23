define([
	'underscore',
	'flickr_photo_data',
	'flickr_set_data',
	'collections/Photos',
	'collections/Photosets'
], function(_, flickrPhotosData, flickrSetsData, Photos, Photosets) {

	var id_to_index = {};

	var getPhotos = function() {
		// Transform our sample data into a simpler subset with a predictable and
		// continious, id-range for testing.
		flickrPhotosData = _.map(flickr_photo_data, function(photo, key) {

			id_to_index[photo.flickr_id] = key;

			return {
				id: photo.flickr_id,
				file: photo.file,
				title: photo.title,
				description: photo.description,
				tags: photo.tags,
				date_taken: photo.date_taken,
				height: photo.height,
				width: photo.width
			};
		});

		return new Photos(flickrPhotosData);
	};

	var getPhotosets = function() {
		flickrSetsData = _.map(flickrSetsData, function(photoset, key) {
			return {
				id: key + 1,
				title: photoset.title,
				description: photoset.description,
				photos: new Photos(_.map(photoset.photos, function(photo_id) {
					return flickrPhotosData[id_to_index[photo_id]];
				}))
			};
		});

		return new Photosets(flickrSetsData);
	};

	return {
		getPhotos: getPhotos,
		getPhotosets: getPhotosets
	};

});
