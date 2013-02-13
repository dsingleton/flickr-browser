define([
    'jquery',
    'backbone',
    'views/AppView',
    'views/HomeView'
], function($, Backbone, AppView, HomeView){

    var AppRouter = Backbone.Router.extend({
        routes: {
          '':          'index',
          'home':      'home'
        },

        index: function() {
            var app_view = new AppView();
            app_view.render();
        },

        home: function() {
            var home_view = new HomeView();
            home_view.render();
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
