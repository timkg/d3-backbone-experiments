var courseView = Backbone.View.extend({
	render: function () {
		var title = this.renderTitle();
		var lessonList = this.renderLessonList();

		this.el = $('<div class="course"></div>');
		this.el.append(title);
		this.el.append(lessonList);

		return this;
	},

	renderTitle: function () {
		var title = $('<h1>' + this.model.get('title') + '</h1>');
		return title;
	},
	renderLessonList: function () {
		var lessonList = $('<ol></ol>')
		var lessons = this.model.get('lessons');
		lessons.each(function (lesson) {
			var lessonListView = new LessonListView({model: lesson});
			lessonList.append(lessonListView.render().el);
		});
		return lessonList;
	}
});