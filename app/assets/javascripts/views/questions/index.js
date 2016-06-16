Quiz.Views.QuestionsIndex = Backbone.View.extend({
  initialize: function() {
    this.query = {"operation":[]};
    this.listenTo(this.collection, 'sync', this.render);
  },

  events: {
    "click .filter-sort-submit": "filterSort"
  },

  template: JST['questions/index'],

  render: function() {
    var content = this.template({questions: this.collection, query: this.query});
    this.$el.html(content);
    return this;
  },

  filterSort: function(e) {
    e.preventDefault();
    this.query = $(".filter-sort-options").serializeJSON();

    this.collection.fetch({
      data: {
        query: this.query
      },
      reset: true,
      success: function(collection, resp){
        this.errors = resp.errors;
      }.bind(this)
    });
  }
});
