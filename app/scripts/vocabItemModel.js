
var VocabItemModel = Backbone.Model.extend({
	initialize: function () {
		this.set({
			title: chance.word(),
			knowledgeLevel: chance.integer({
				min: 1,
				max: 6
			}),
			daysSinceLastReview: chance.integer({
				min: 1,
				max: 50
			})
		});
	}
})