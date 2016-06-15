Quiz.Views.QuestionShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  template: JST['questions/show'],

  render: function() {
    var content = this.template({question: this.model});
    this.$el.html(content);
    return this;
  }
});
