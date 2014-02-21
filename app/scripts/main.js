/*
var course = buildCourse();
var courseView = new courseView({model: course});
$(document.body).append(courseView.render().el);
*/

(function () {
	var height = 50;
	$('#one').attr('height', height + 'px');

	var vocabItems = [];
	for (var i = 0; i < 5; i++) {
		vocabItems.push(buildVocabItem().toJSON());
	}

	d3.select('#one').selectAll('circle')
		.data(vocabItems)
		.enter().append('circle')
		.attr('r', function (d) {
			return Math.round(5 + (d.knowledgeLevel * 1.5));
		})
		.attr('cy', function () {
			return 25;
		})
		.attr('cx', function (d, i) {
			return (i + 1) * 50;
		})
		.attr('opacity', function (d) {
			return 0.25 + (d.daysSinceLastReview / 100);
		});
}());

(function () {
	var height = 50;
	$('#two').attr('height', height + 'px');

	var vocabItems = [];
	for (var i = 0; i < 5; i++) {
		vocabItems.push(buildVocabItem().toJSON());
	}
	d3.select('#two').selectAll('circle')
		.data(vocabItems)
		.enter().append('circle')
		.attr('r', function (d) {
			return Math.round(5 + (d.knowledgeLevel * 1.5));
		})
		.attr('cy', function () {
			return height / 2;
		})
		.attr('cx', function (d, i) {
			return (i + 1) * 50;
		})
		.attr('opacity', function (d) {
			return 0.5 + (d.daysSinceLastReview / 100);
		});	
}());
