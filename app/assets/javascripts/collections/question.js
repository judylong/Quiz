Quiz.Collections.Questions = Backbone.Collection.extend({
  initialize: function() {
    this._pageNumber = 1;
    this._query = {"operation":[]};
  },
  model: Quiz.Models.Question,
  url: "/api/questions",
  getOrFetch: function(id) {
    var model = this.get(id);
    if (model) {
      model.fetch();
    } else {
      model = new Quiz.Models.Question({id: id});
      this.add(model);
      model.fetch({
        error: function() {
          this.remove(model);
        }.bind(this)
      });
    }
    return model;
  },
  pageNumber: function(newPageNum) {
    if (newPageNum) {
      this._pageNumber = newPageNum;
    }
    return this._pageNumber;
  },
  query: function(newQuery) {
    if (newQuery) {
      this._query = $.extend({"operation":[]}, newQuery);
    }
    return this._query;
  }
});
