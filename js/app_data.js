define([
	'underscore',
	'flickr_photo_data'
], function(_, flickr_photo_data) {

	var getPhotos = function() {
		// Transform our sample data into a simpler subset with a predictable and
		// continious, id-range for testing.
		flickr_photo_data = _.map(flickr_photo_data, function(photo, key) {
			return {
				id: key + 1,
				file: photo.file,
				title: photo.title,
				description: photo.description,
				tags: photo.tags,
				date_taken: photo.date_taken,
				height: photo.height,
				width: photo.width
			};
		});

		return flickr_photo_data;
	};

	return {
		getPhotos: getPhotos
	};

});
