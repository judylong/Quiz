window.Quiz = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.header = new Quiz.Views.Header({el: "#header"});
    this.router = new Quiz.Routers.Router({$rootEl: $("#main")});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Quiz.initialize();
});
