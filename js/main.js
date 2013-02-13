requirejs.config({
    baseUrl: 'js/components',
    shim: {
        'underscore': {
            exports: '_'
        }
    },
    paths: {
        jquery: 'jquery/jquery.min',
        underscore: 'underscore/underscore-min'
    }
});

// Load some dependencies to test them
requirejs(['jquery', 'underscore'], function($, _){
    _.each($('html'), function(el) { console.log(el); });
});
