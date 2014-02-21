var LessonListView = Backbone.View.extend({
	render: function () {
		var title = this.renderTitle();
		var vocabItemList = this.renderVocabItemList();

		this.el = $('<li></li>');
		this.el.append(title);
		this.el.append(vocabItemList);

		return this;
	},

	renderTitle: function () {
		this.title =  $('<h2>' + this.model.get('title') + '</h2>')
		return this.title;
	},

	renderVocabItemList: function () {
		var vocabItemList = $('<ul></ul>')
		var vocabItems = this.model.get('vocabItems');
		vocabItems.each(function (vocabItem) {
			var vocabItemView = new VocabItemView({model: vocabItem});
			vocabItemList.append(vocabItemView.render().el);
		});
		return vocabItemList;
	}
});