define(['jquery', 'underscore', 'router'],
function($, _, Router) {

    var initialize = function(){
        console.log('initialize Router');
        Router.initialize();
    };

    return {
        initialize: initialize
    };

});
