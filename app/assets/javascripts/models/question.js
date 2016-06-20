Quiz.Models.Question = Backbone.Model.extend({
  urlRoot: '/api/questions',
  toJSON: function() {
    var json = {question: _.clone(this.attributes)};
    return json;
  }
});
