define(['jquery', 'backbone'],
function($, Bacbone) {

    var HomeView = Backbone.View.extend({

        initialize: function() {
            $('#content').html('home!');
        }
    });

    return HomeView;
});
