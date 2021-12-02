let currentQuestion = 0;

let universities = {
	"МГУ": {
		points: 0,
		rank: 1,
		partOfMath: 0.6,
	},
	"МФТИ": {
		points: 0,
		rank: 2,
		partOfMath: 1,
	},
	"МИФИ": {
		points: 0,
		rank: 3,
		partOfMath: 0.97,
	},
	"ВШЭ": {
		points: 0,
		rank: 4,
		partOfMath: 0.39,
	},
	"МГИМО": {
		points: 0,
		rank: 5,
		partOfMath: 0.31,
	},
	"МГТУ им. Н.Э. Баумана": {
		points: 0,
		rank: 6,
		partOfMath: 0.98,
	},
	"РАНХиГС": {
		points: 0,
		rank: 7,
		partOfMath: 0.58,
	},
	"Финансовый университет": {
		points: 0,
		rank: 8,
		partOfMath: 0.76,
	},
	"РЭУ им. Г.В. Плеханова": {
		points: 0,
		rank: 9,
		partOfMath: 0.76,
	},
	"МИСиС": {
		points: 0,
		rank: 10,
		partOfMath: 0.95,
	},
	"РГУНиГ им. И.М. Губкина": {
		points: 0,
		rank: 11,
		partOfMath: 0.88,
	},
	"МЭИ": {
		points: 0,
		rank: 12,
		partOfMath: 0.89,
	},
	"ПМГМУ им. И.М. Сеченова": {
		points: 0,
		rank: 13,
		partOfMath: 0.56,
	},
	"РУДН": {
		points: 0,
		rank: 14,
		partOfMath: 0.74,
	},
	"РНИМУ им. Н.И. Пирогова": {
		points: 0,
		rank: 15,
		partOfMath: 0.36,
	},
	"МГЛУ": {
		points: 0,
		rank: 16,
		partOfMath: 0.11,
	},
	"ВАВТ Минэкономразвития России": {
		points: 0,
		rank: 17,
		partOfMath: 0.69,
	},
	"МАИ": {
		points: 0,
		rank: 18,
		partOfMath: 0.99,
	},
	"МГЮА": {
		points: 0,
		rank: 19,
		partOfMath: 0.01,
	},
	"ВУМО": {
		points: 0,
		rank: 20,
		partOfMath: 0.14,
	},
}

function prevQuestion() {
	hideQuestion(currentQuestion);

	currentQuestion -= 1;

	showQuestion(currentQuestion);

	//If this is the first question
	if (currentQuestion === 0) {
		hideButton("prev");
	}

	//If there was a transition from the last question to the penultimate question
	if (currentQuestion === countTotalNumberOfQuestions() - 2) {
		hideButton("submit");
		showButton("next");
	}
}

function nextQuestion() {
	hideQuestion(currentQuestion);

	currentQuestion += 1;

	showQuestion(currentQuestion);

	//If there was a transition from the first question to the second question
	if (currentQuestion === 1) {
		showButton("prev");
	}

	//If this is the last question
	if (currentQuestion === countTotalNumberOfQuestions() - 1) {
		hideButton("next");
		showButton("submit");
	}
}

function processAnswers() {
	let radios = document.getElementsByClassName("question-radio__input-radio");

	let counterOfQuestions = 0;

	//The number of checked radios is equal to the number of questions. One checked radio = one question
	for (let i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			givePointsToUniversities(counterOfQuestions++, radios[i].value);
		}
	}

	hideQuestion(currentQuestion);
	hideButton("prev");
	hideButton("submit");
	showResult();
}

function givePointsToUniversities(numOfQuestion, answer) {
	let pointsForUniversity;

	if (numOfQuestion === 0) {
		if (answer === "prestige") {
			for (let university in universities) {
				pointsForUniversity = 1 / universities[university]["rank"];

				universities[university]["points"] += pointsForUniversity;
			}
		}
		else if (answer === "not-prestige") {
			for (let university in universities) {
				pointsForUniversity = universities[university]["rank"] / 20;

				universities[university]["points"] += pointsForUniversity;
			}
		}
	}
	else if (numOfQuestion === 1) {
		if (answer === "pass-math") {
			for (let university in universities) {
				pointsForUniversity = 100 / universities[university]["partOfMath"];

				universities[university]["points"] += pointsForUniversity;
			}
		}
		else if (answer === "not-pass-math") {
			for (let university in universities) {
				pointsForUniversity = 50 / universities[university]["partOfMath"];

				universities[university]["points"] += pointsForUniversity;
			}
		}
	}
}

function showResult() {
	let result = document.getElementsByClassName("multi-step-form__result")[0];
	//Removing the modifier "multi-step-form__result_hidden"
	result.className = result.className.replace(" multi-step-form__result_hidden", "");

	let sortedListOfUniversities = 
		Object.keys(universities).sort(
			function(a, b) {
				return universities[b]["points"] - universities[a]["points"];
			});

	//Assumption: there are exactly 4 objects in the section "result"
	let resultObjects = result.getElementsByClassName("result-object");

	//Showing the universities that occupy the first three places
	for (let i = 0; i < 3; i++) {
		resultObjects[i].innerHTML = sortedListOfUniversities[i];
	}

	//Showing other universities (starting from the fourth) in a row. Adding them to the last section of the "result-object"
	for (let i = 3; i < sortedListOfUniversities.length; i++) {
		resultObjects[3].innerHTML += sortedListOfUniversities[i];
		if (i != sortedListOfUniversities.length - 1) {
			resultObjects[3].innerHTML += ", ";
		}
	}
}

function countTotalNumberOfQuestions() {
	return document.getElementsByClassName("question-radio").length;
}

function showQuestion(numOfQuestion) {
	let questions = document.getElementsByClassName("question-radio");
	//Removing the modifier "question-radio_hidden"
	questions[numOfQuestion].className = questions[numOfQuestion].className.replace(" question-radio_hidden", "");
}

function hideQuestion(numOfQuestion) {
	let questions = document.getElementsByClassName("question-radio");
	//Adding the modifier "question-radio_hidden"
	questions[numOfQuestion].className += " question-radio_hidden";
}

function showButton(buttonType) {
	let button = document.getElementsByClassName("multi-step-form__button_type_" + buttonType);
	//Removing the modifier "button_hidden"
	button[0].className = button[0].className.replace(" button_hidden", "");
}

function hideButton(buttonType) {
	let button = document.getElementsByClassName("multi-step-form__button_type_" + buttonType);
	//Adding the modifier "button_hidden"
	button[0].className += " button_hidden";
}