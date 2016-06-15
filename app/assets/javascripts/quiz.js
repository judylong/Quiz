window.Quiz = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.router = new Quiz.Routers.Router({$rootEl: $("#main")});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Quiz.initialize();
});
