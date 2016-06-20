Quiz.Views.QuestionForm = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  template: JST['questions/form'],

  tagName: 'form',

  className: 'question-form',

  events: {
    "click .submission": 'submit',
    "change input": "updateAnswer",
    "change select": "updateAnswer"
  },

  render: function() {
    var content = this.template({question: this.model});
    this.$el.html(content);
    return this;
  },

  submit: function(e) {
    e.preventDefault();
    this.updateAnswer();
    var attrs = this.$el.serializeJSON();
    attrs.qtext = "What is " + attrs.qtext_left + " " + attrs.qtext_operation + " " + attrs.qtext_right + "?";
    attrs.answer = $('.answer').text();
    var that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function() {
        that.collection.add(that.model, {merge: true});
        Backbone.history.navigate("#questions/" + that.model.id, {trigger: true});
      },
      error: function(model, resp){
        alert("Something went terribly, terribly wrong");
      }
    });
  },

  updateAnswer:function() {
    var left = $('.qtext-left').val();
    var right = $('.qtext-right').val();
    var operation = $('.qtext-operation').val();
    if (left && right) {
      $('.answer').text(math.eval(left + operation + right));
    } else {
      $('.answer').text("TBD");
    }
  }
});
