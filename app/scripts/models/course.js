var Course = Backbone.Model.extend({
	initialize: function () {
		// ...
	},
	getNumberOfVocabItems: function () {
		var count = 0;
		this.get('lessons').each(function (lesson) {
			count += lesson.get('vocabItems').length;
		})
		return count;
	}
});
