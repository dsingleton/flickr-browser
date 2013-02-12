requirejs.config({
    baseUrl: 'js/components',
    paths: {
        jquery: 'jquery/jquery.min'
    }
});

// Load jquery, not used by tested for manually in console to test requirejs
requirejs(['jquery']);
