var VocabItemModelBasicView = Backbone.View.extend({
	render: function () {
		this.el = $('<div>' + this.model.get('title') + ': ' + this.model.get('knowledgeLevel') + '<div>');
		return this;
	}
});