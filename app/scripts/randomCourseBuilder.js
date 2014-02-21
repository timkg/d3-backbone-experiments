var MIN_NUMBER_OF_LESSONS_PER_COURSE = 10;
var MAX_NUMBER_OF_LESSONS_PER_COURSE = 20;

var MIN_NUMBER_OF_VOCAB_ITEMS_PER_LESSON = 10;
var MAX_NUMBER_OF_VOCAB_ITEMS_PER_LESSON = 20;

var MIN_KNOWLEDGE_LEVEL = 1;
var MAX_KNOWLEDGE_LEVEL = 6;

var MIN_DAYS_SINCE_LAST_REVIEW = 0;
var MAX_DAYS_SINCE_LAST_REVIEW = 50;


function buildVocabItem () {
	var title = chance.word();
	
	var knowledgeLevel = chance.integer({
		min: MIN_KNOWLEDGE_LEVEL,
		max: MAX_KNOWLEDGE_LEVEL
	});
	
	var daysSinceLastReview = chance.integer({
		min: MIN_DAYS_SINCE_LAST_REVIEW,
		max: MAX_DAYS_SINCE_LAST_REVIEW
	});
	
	return new VocabItem({
		title: title,
		knowledgeLevel: knowledgeLevel,
		daysSinceLastReview: daysSinceLastReview
	});
}

function buildLesson () {
	var title = chance.sentence({words: 3});

	var amountOfVocabItems = chance.integer({
		min: MIN_NUMBER_OF_VOCAB_ITEMS_PER_LESSON,
		max: MAX_NUMBER_OF_VOCAB_ITEMS_PER_LESSON
	});
	
	var vocabItems = [];
	for (var i = 0; i < amountOfVocabItems; i++) {
		vocabItems.push(buildVocabItem());
	}

	return new Lesson({
		title: title,
		vocabItems: new VocabItemCollection(vocabItems)
	});
}

function buildCourse () {
	var title = chance.word({syllables: 5});
	
	var amountOfLessonsPerCourse = chance.integer({
		min: MIN_NUMBER_OF_LESSONS_PER_COURSE,
		max: MAX_NUMBER_OF_LESSONS_PER_COURSE
	});

	var lessons = [];
	for (var i = 0; i < amountOfLessonsPerCourse; i++) {
		lessons.push(buildLesson(title));
	}	
	
	return new Course({
		title: title,
		lessons: new LessonCollection(lessons)
	});
}

