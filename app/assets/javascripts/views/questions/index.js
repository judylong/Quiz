Quiz.Views.QuestionsIndex = Backbone.View.extend({
  initialize: function() {
    this.query = {"operation":[]};
    this.listenTo(this.collection, 'sync', this.renderSubview);
  },

  events: {
    "click .filter-sort-submit": "filterSort"
  },

  className: "index",

  template: JST['questions/filtersort'],

  render: function() {
    this.$el.html(this.template({query: this.query}));
    setTimeout(function() {this.renderSubview()}.bind(this), 1);
    return this;
  },

  renderSubview: function() {
    $('#questions-paginaton').pagination({
      dataSource: this.collection,
      locator: 'models',
      totalNumber: this.collection.length,
      pageSize: 100,
      pageNumber: this.collection.pageNumber(),
      callback: function(data, pagination) {
        this.collection.pageNumber(pagination.pageNumber);
        var html = JST['questions/index']({questions: data});
        $('#questions-div').html(html);
      }.bind(this)
    });
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
        this.collection.pageNumber(1);
        this.errors = resp.errors;
      }.bind(this)
    });
  }
});
