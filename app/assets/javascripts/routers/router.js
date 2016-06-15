Quiz.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;

    this.collection = new Quiz.Collections.Questions();
    this.collection.fetch();
  }
});
