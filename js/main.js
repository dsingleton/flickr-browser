requirejs.config({
    baseUrl: 'js',
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
        jquery: 'components/jquery/jquery.min',
        underscore: 'components/underscore/underscore-min',
        backbone: 'components/backbone/backbone'
    }
});

requirejs(['app'],
function(App){
    App.initialize();
});
