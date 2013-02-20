define([
	'underscore',
	'flickr_photo_data',
	'flickr_set_data'
], function(_, flickrPhotosData, flickrSetsData) {

	var getPhotos = function() {
		// Transform our sample data into a simpler subset with a predictable and
		// continious, id-range for testing.
		flickrPhotosData = _.map(flickr_photo_data, function(photo, key) {
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

		return flickrPhotosData;
	};

	var getPhotosets = function() {
		flickrSetsData = _.map(flickrSetsData, function(photoset, key) {
			return {
				id: key + 1,
				title: photoset.title,
				description: photoset.description
			};
		});

		return flickrSetsData;
	};

	return {
		getPhotos: getPhotos,
		getPhotosets: getPhotosets
	};

});
