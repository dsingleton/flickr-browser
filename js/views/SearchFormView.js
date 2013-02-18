define([
	'jquery',
	'backbone'
], function() {

	SearchFormView = Backbone.View.extend({

		el: '#search-form',

		events: {
      'submit': 'onSearchSubmitted'
   },
   
		initialize: function() {
			
		},

		onSearchSubmitted: function(event) {
			event.preventDefault();
			var input = $('input', event.target);

			Backbone.history.navigate('search?q=' + input.val(), true);
			input.val('').blur();
		}

	});

	return SearchFormView;
});
