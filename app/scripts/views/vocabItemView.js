var VocabItemView = Backbone.View.extend({
	render: function () {
		var htmlString = '<li>' + this.model.get('title') + ': ' + this.model.get('knowledgeLevel') + '</li>';
		this.el = $(htmlString);
		return this;
	}
});