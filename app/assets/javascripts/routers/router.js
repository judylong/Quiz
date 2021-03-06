Quiz.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;

    this.collection = new Quiz.Collections.Questions();
    this.collection.fetch();
  },

  routes: {
    "":"landing",
    "questions":"questionsIndex",
    "questions/new":"newQuestion",
    "questions/:id":"showQuestion",
    "questions/:id/edit":"editQuestion"
  },

  landing: function() {
    var view = new Quiz.Views.Landing();
    this._swapView(view);
  },

  questionsIndex: function() {
    var view = new Quiz.Views.QuestionsIndex({collection: this.collection});
    this._swapView(view);
  },

  showQuestion: function(id) {
    var model = this.collection.getOrFetch({id: id});
    var view = new Quiz.Views.QuestionShow({model: model, collection: this.collection});
    this._swapView(view);
  },

  editQuestion: function(id) {
    var model = this.collection.getOrFetch({id: id});
    var view = new Quiz.Views.QuestionForm({model: model, collection: this.collection});
    this._swapView(view);
  },

  newQuestion: function() {
    var model = new Quiz.Models.Question();
    var view = new Quiz.Views.QuestionForm({model: model, collection: this.collection});
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
});
