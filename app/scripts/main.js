var course = buildCourse();

var courseView = new courseView({model: course});

$(document.body).append(courseView.render().el);
