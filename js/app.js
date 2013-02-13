define(['jquery', 'underscore', 'backbone', 'views/AppView'],
function($, _, Backbone, AppView) {

  var initialize = function(){

    console.log($, _, Backbone);
    var App = new AppView();
  };

  return {
    initialize: initialize
  };

});
