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
  },

  submit: function(e) {
    e.preventDefault();
    var attrs = this.$el.serializeJSON();
    var that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function() {
        that.collection.add(that.model, {merge: true});
        Backbone.history.navigate("#questions/" + that.model.id, {trigger: true});
      }
    });
  }
});
