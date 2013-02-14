requirejs.config({
    baseUrl: 'js',
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'flickr_photo_data': {
            exports: 'flickr_photo_data'
        }
    },
    paths: {
        jquery: 'components/jquery/jquery.min',
        underscore: 'components/underscore/underscore-min',
        backbone: 'components/backbone/backbone',
        mustache: 'components/mustache/mustache',
        flickr_photo_data: '../data/sample'
    }
});

requirejs(['app'],
function(App) {
    App.initialize();
});
