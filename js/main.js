requirejs.config({
    baseUrl: 'js/components',
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    },
    paths: {
        jquery: 'jquery/jquery.min',
        underscore: 'underscore/underscore-min',
        backbone: 'backbone/backbone',
        app: '../app'
    }
});

requirejs(['app'],
function(App){
    App.initialize();
});
