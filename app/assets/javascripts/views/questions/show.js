Quiz.Views.QuestionShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    "click .delete": "destroyQuestion"
  },

  template: JST['questions/show'],

  render: function() {
    var content = this.template({question: this.model});
    this.$el.html(content);
    return this;
  },

  destroyQuestion: function(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    var question = this.collection.get($target.attr("data-id"));
    question.destroy({
      success: function() {
        Backbone.history.navigate('#questions', {trigger: true});
      }
    });
  }
});
