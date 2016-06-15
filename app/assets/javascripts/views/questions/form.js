Quiz.Views.QuestionForm = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  template: JST['questions/form'],

  tagName: 'form',

  events: {
    "click button": 'submit'
  },

  render: function() {
    var content = this.template({question: this.model});
    this.$el.html(content);
    return this;
  }
});
