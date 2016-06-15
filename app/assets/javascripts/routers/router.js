Quiz.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;

    this.collection = new Quiz.Collections.Questions();
    this.collection.fetch();
  },

  routes: {
    "":"landing",
    "questions":"questionsIndex",
  },

  landing: function() {
    var view = new Quiz.Views.Landing();
    this._swapView(view);
  },

  questionsIndex: function() {
    var view = new Quiz.Views.QuestionsIndex({collection: this.collection});
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
});