Quiz.Collections.Questions = Backbone.Collection.extend({
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
  }
});
