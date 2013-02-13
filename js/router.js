define([
    'jquery',
    'backbone',
    'views/IndexView',
    'views/PhotoView'
], function($, Backbone, IndexView, PhotoView){

    var AppRouter = Backbone.Router.extend({
        routes: {
          '':				'index',
          'photo/:id':		'photo'
        },

        index: function() {
            var app_view = new IndexView();
            app_view.render();
        },

        photo: function(id) {
            var photo_view = new PhotoView({id: id});
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
