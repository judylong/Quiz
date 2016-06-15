Quiz.Views.QuestionsIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },
  template: JST['questions/index'],

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.renderIndexItems();
    return this;
  },

  renderIndexItems: function() {
    var index = $('#questions-div');
    var indexItemTemplate = JST['questions/index_item'];
    this.collection.forEach(function(q) {
      var subview = indexItemTemplate({question: q});
      index.append(subview);
    });
  }
});
