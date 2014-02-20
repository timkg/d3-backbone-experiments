var VocabItemCollection = Backbone.Collection.extend({
	model: VocabItemModel,
	initialize: function () {
		var modelArray = [];
		for (var i=0; i<20; i++) {
			modelArray.push(new VocabItemModel());
		}
		this.set(modelArray);
	}
});