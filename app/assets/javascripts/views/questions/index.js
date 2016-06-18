Quiz.Views.QuestionsIndex = Backbone.View.extend({
  initialize: function() {
    this.query = {"operation":[]};
    this.listenTo(this.collection, 'sync', this.render);
  },

  events: {
    "click .filter-sort-submit": "filterSort"
  },

  className: "index",

  template: JST['questions/index'],

  render: function() {
    this.$el.html(this.template({query: this.query}));
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
        if (!this.query['operation']) {
          this.query['operation']=[];
        }
        this.emptyResultsCollection = true;
        this.errors = resp.errors;
      }.bind(this)
    });
  }
});
