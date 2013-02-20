define([
	'underscore',
	'flickr_photo_data'
], function(_, flickrPhotosData) {

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

	return {
		getPhotos: getPhotos
	};

});
