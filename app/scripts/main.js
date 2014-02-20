var vocabItems = new VocabItemCollection();

vocabItems.each(function (model) {
	var view = new VocabItemModelBasicView({model: model});
	$(document.body).append(view.render().el);
});