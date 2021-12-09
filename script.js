let currentQuestion = 0;

let universities = {
	"МГУ": {
		points: 0,
		//The university's place in the list according to various criteria (from 1 to 20 places).
		//Rank 1 is awarded to the university with the highest indicator.
		rank: {
			prestige: 1,
			partOfMath: 12,
			science: 1,
			learningEnvironment: 1,
			demandOfDiploma: 1,
			averageCost: 3,
			averageScore: 5,
			novelty: 20,
			popularity: 1,
		},
		//If this factor is present at the university, it is assigned true. Otherwise false
		isHere: {
			militaryDepartment: true,
			collaborationWithMail: true,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: false,
			essayConsidering: true,
			collegeConsidering: true,
			volunteeringConsidering: false,
		},
		//The sciences that prevail at the university
		subject: "common",
	},
	"МФТИ": {
		points: 0,
		rank: {
			prestige: 2,
			partOfMath: 1,
			science: 2,
			learningEnvironment: 2,
			demandOfDiploma: 9,
			averageCost: 8,
			averageScore: 1,
			novelty: 4,
			popularity: 14,
		},
		isHere: {
			militaryDepartment: true,
			collaborationWithMail: true,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: false,
		},
		subject: "technicalSciences",
	},
	"МИФИ": {
		points: 0,
		rank: {
			prestige: 3,
			partOfMath: 4,
			science: 3,
			learningEnvironment: 12,
			demandOfDiploma: 5,
			averageCost: 16,
			averageScore: 4,
			novelty: 7,
			popularity: 13,
		},
		isHere: {
			militaryDepartment: true,
			collaborationWithMail: true,
			doubleDiploma: false,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: true,
			collegeConsidering: true,
			volunteeringConsidering: false,
		},
		subject: "technicalSciences",
	},
	"ВШЭ": {
		points: 0,
		rank: {
			prestige: 4,
			partOfMath: 16,
			science: 5,
			learningEnvironment: 4,
			demandOfDiploma: 4,
			averageCost: 2,
			averageScore: 3,
			novelty: 2,
			popularity: 3,
		},
		isHere: {
			militaryDepartment: true,
			collaborationWithMail: true,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: false,
		},
		subject: "common",
	},
	"МГИМО": {
		points: 0,
		rank: {
			prestige: 5,
			partOfMath: 18,
			science: 10,
			learningEnvironment: 3,
			demandOfDiploma: 7,
			averageCost: 1,
			averageScore: 2,
			novelty: 6,
			popularity: 10,
		},
		isHere: {
			militaryDepartment: true,
			collaborationWithMail: false,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: false,
		},
		subject: "humanities",
	},
	"МГТУ им. Н.Э. Баумана": {
		points: 0,
		rank: {
			prestige: 6,
			partOfMath: 3,
			science: 6,
			learningEnvironment: 5,
			demandOfDiploma: 2,
			averageCost: 7,
			averageScore: 15,
			novelty: 18,
			popularity: 4,
		},
		isHere: {
			militaryDepartment: true,
			collaborationWithMail: true,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: true,
		},
		subject: "technicalSciences",
	},
	"РАНХиГС": {
		points: 0,
		rank: {
			prestige: 7,
			partOfMath: 13,
			science: 10,
			learningEnvironment: 7,
			demandOfDiploma: 6,
			averageCost: 6,
			averageScore: 6,
			novelty: 1,
			popularity: 2,
		},
		isHere: {
			militaryDepartment: false,
			collaborationWithMail: false,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: false,
		},
		subject: "finance",
	},
	"Финансовый университет": {
		points: 0,
		rank: {
			prestige: 8,
			partOfMath: 8,
			science: 10,
			learningEnvironment: 8,
			demandOfDiploma: 3,
			averageCost: 10,
			averageScore: 10,
			novelty: 13,
			popularity: 11,
		},
		isHere: {
			militaryDepartment: true,
			collaborationWithMail: false,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: false,
		},
		subject: "finance",
	},
	"РЭУ им. Г.В. Плеханова": {
		points: 0,
		rank: {
			prestige: 9,
			partOfMath: 8,
			science: 10,
			learningEnvironment: 6,
			demandOfDiploma: 8,
			averageCost: 12,
			averageScore: 9,
			novelty: 15,
			popularity: 7,
		},
		isHere: {
			militaryDepartment: false,
			collaborationWithMail: false,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: true,
		},
		subject: "finance",
	},
	"МИСиС": {
		points: 0,
		rank: {
			prestige: 10,
			partOfMath: 5,
			science: 4,
			learningEnvironment: 12,
			demandOfDiploma: 10,
			averageCost: 17,
			averageScore: 12,
			novelty: 14,
			popularity: 15,
		},
		isHere: {
			militaryDepartment: false,
			collaborationWithMail: false,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: true,
		},
		subject: "technicalSciences",
	},
	"РГУНиГ им. И.М. Губкина": {
		points: 0,
		rank: {
			prestige: 11,
			partOfMath: 7,
			science: 10,
			learningEnvironment: 12,
			demandOfDiploma: 12,
			averageCost: 13,
			averageScore: 18,
			novelty: 10,
			popularity: 18,
		},
		isHere: {
			militaryDepartment: true,
			collaborationWithMail: false,
			doubleDiploma: true,
			gtoConsidering: false,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: false,
		},
		subject: "technicalSciences",
	},
	"МЭИ": {
		points: 0,
		rank: {
			prestige: 12,
			partOfMath: 6,
			science: 9,
			learningEnvironment: 12,
			demandOfDiploma: 13,
			averageCost: 20,
			averageScore: 19,
			novelty: 5,
			popularity: 8,
		},
		isHere: {
			militaryDepartment: true,
			collaborationWithMail: false,
			doubleDiploma: false,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: true,
		},
		subject: "technicalSciences",
	},
	"ПМГМУ им. И.М. Сеченова": {
		points: 0,
		rank: {
			prestige: 13,
			partOfMath: 14,
			science: 7,
			learningEnvironment: 10,
			demandOfDiploma: 14,
			averageCost: 14,
			averageScore: 14,
			novelty: 19,
			popularity: 9,
		},
		isHere: {
			militaryDepartment: false,
			collaborationWithMail: false,
			doubleDiploma: false,
			gtoConsidering: false,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: false,
		},
		subject: "naturalSciences",
	},
	"РУДН": {
		points: 0,
		rank: {
			prestige: 14,
			partOfMath: 10,
			science: 8,
			learningEnvironment: 9,
			demandOfDiploma: 15,
			averageCost: 19,
			averageScore: 17,
			novelty: 3,
			popularity: 5,
		},
		isHere: {
			militaryDepartment: false,
			collaborationWithMail: false,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: false,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: true,
		},
		subject: "common",
	},
	"РНИМУ им. Н.И. Пирогова": {
		points: 0,
		rank: {
			prestige: 15,
			partOfMath: 17,
			science: 10,
			learningEnvironment: 12,
			demandOfDiploma: 15,
			averageCost: 5,
			averageScore: 13,
			novelty: 16,
			popularity: 16,
		},
		isHere: {
			militaryDepartment: false,
			collaborationWithMail: false,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: false,
		},
		subject: "naturalSciences",
	},
	"МГЛУ": {
		points: 0,
		rank: {
			prestige: 16,
			partOfMath: 19,
			science: 10,
			learningEnvironment: 11,
			demandOfDiploma: 15,
			averageCost: 15,
			averageScore: 7,
			novelty: 10,
			popularity: 20,
		},
		isHere: {
			militaryDepartment: true,
			collaborationWithMail: false,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: true,
		},
		subject: "humanities",
	},
	"ВАВТ": {
		points: 0,
		rank: {
			prestige: 17,
			partOfMath: 11,
			science: 10,
			learningEnvironment: 12,
			demandOfDiploma: 15,
			averageCost: 4,
			averageScore: 8,
			novelty: 8,
			popularity: 19,
		},
		isHere: {
			militaryDepartment: false,
			collaborationWithMail: false,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: false,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: true,
		},
		subject: "finance",
	},
	"МАИ": {
		points: 0,
		rank: {
			prestige: 18,
			partOfMath: 2,
			science: 10,
			learningEnvironment: 12,
			demandOfDiploma: 11,
			averageCost: 18,
			averageScore: 19,
			novelty: 10,
			popularity: 6,
		},
		isHere: {
			militaryDepartment: true,
			collaborationWithMail: false,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: true,
		},
		subject: "technicalSciences",
	},
	"МГЮА": {
		points: 0,
		rank: {
			prestige: 19,
			partOfMath: 20,
			science: 10,
			learningEnvironment: 12,
			demandOfDiploma: 15,
			averageCost: 11,
			averageScore: 11,
			novelty: 8,
			popularity: 12,
		},
		isHere: {
			militaryDepartment: false,
			collaborationWithMail: false,
			doubleDiploma: true,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: true,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: true,
		},
		subject: "humanities",
	},
	"МГМСУ им. А.И. Евдокимова": {
		points: 0,
		rank: {
			prestige: 20,
			partOfMath: 15,
			science: 10,
			learningEnvironment: 12,
			demandOfDiploma: 15,
			averageCost: 9,
			averageScore: 16,
			novelty: 17,
			popularity: 17,
		},
		isHere: {
			militaryDepartment: true,
			collaborationWithMail: false,
			doubleDiploma: false,
			gtoConsidering: true,
			medalConsidering: true,
			portfolioConsidering: false,
			essayConsidering: false,
			collegeConsidering: true,
			volunteeringConsidering: false,
		},
		subject: "naturalSciences",
	},
}

function nextQuestion() {
	processCurrentQuestion();

	hideQuestion(currentQuestion);

	currentQuestion += 1;

	showQuestion(currentQuestion);

	showCurrentResult();

	//If this is the last question
	if (currentQuestion === countTotalNumberOfQuestions() - 1) {
		hideButton("next");
		showButton("submit");
	}
}

function processCurrentQuestion() {
	let descendantsOfQuestion = document
										.getElementsByClassName("multi-step-form__question")[currentQuestion]
										.querySelectorAll("*");

	for (let i = 0; i < descendantsOfQuestion.length; i++) {
		//Find all variants of answers in this question
		if (descendantsOfQuestion[i].className.includes("input")) {
			if (descendantsOfQuestion[i].checked) {
				givePointsToUniversities(descendantsOfQuestion[i].value);
			}
		}
	}

	//If this is the last question
	if (currentQuestion == countTotalNumberOfQuestions() - 1) {
		hideQuestion(currentQuestion);
		hideButton("submit");
		hideCurrentResults();
		showResults();
	}
}

function givePointsToUniversities(answer) {
	let pointsForUniversity;

	let parsedAnswer = answer.split("-");

	if (parsedAnswer[0] == "rank") {
		if (parsedAnswer[2] == "moreIsBetter") {
			for (let university in universities) {
				pointsForUniversity = 1 / universities[university]["rank"][parsedAnswer[1]];

				universities[university]["points"] += pointsForUniversity;
			}
		}
		else if (parsedAnswer[2] == "moreIsWorse") {
			for (let university in universities) {
				pointsForUniversity = universities[university]["rank"][parsedAnswer[1]] / Object.keys(universities).length;

				universities[university]["points"] += pointsForUniversity;
			}
		}
	}
	else if (parsedAnswer[0] === "isHere") {
		if (parsedAnswer[2] === "important") {
			for (let university in universities) {
				if (universities[university]["isHere"][parsedAnswer[1]] == true) {
					universities[university]["points"] += 1;
				}
			}
		}
	}
	else if (parsedAnswer[0] === "subject") {
		for (let university in universities) {
			if (universities[university]["subject"] == parsedAnswer[1]) {
				universities[university]["points"] += 2;
			}
		}
	}
}

function showCurrentResult() {
	currentResult = document.getElementsByClassName("multi-step-form__string-with-objects")[0];

	let sortedListOfUniversities = 
		Object.keys(universities).sort(
			function(a, b) {
				return universities[b]["points"] - universities[a]["points"];
			});

	currentResult.innerHTML = sortedListOfUniversities.join(", ");
}

function hideCurrentResults() {
	currentResult = document.getElementsByClassName("multi-step-form__current-results")[0];
	//Adding the modifier "multi-step-form__current-results_hidden"
	currentResult.classList.add("multi-step-form__current-results_hidden");
}

function showResults() {
	let result = document.getElementsByClassName("multi-step-form__result")[0];
	//Removing the modifier "multi-step-form__result_hidden"
	result.classList.remove("multi-step-form__result_hidden");

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
	sortedListOfUniversities = sortedListOfUniversities.slice(3);
	resultObjects[3].innerHTML = sortedListOfUniversities.join(", ");
}

function countTotalNumberOfQuestions() {
	return document.getElementsByClassName("multi-step-form__question").length;
}

function showQuestion(numOfQuestion) {
	let questions = document.getElementsByClassName("multi-step-form__question");
	//Removing the modifier "multi-step-form__question_hidden"
	questions[numOfQuestion].classList.remove("multi-step-form__question_hidden");
}

function hideQuestion(numOfQuestion) {
	let questions = document.getElementsByClassName("multi-step-form__question");
	//Adding the modifier "multi-step-form__question_hidden"
	questions[numOfQuestion].classList.add("multi-step-form__question_hidden");
}

function showButton(buttonType) {
	let button = document.getElementsByClassName("multi-step-form__button_type_" + buttonType)[0];
	//Removing the modifier "button_hidden"
	button.classList.remove("button_hidden");
}

function hideButton(buttonType) {
	let button = document.getElementsByClassName("multi-step-form__button_type_" + buttonType)[0];
	//Adding the modifier "button_hidden"
	button.classList.add("button_hidden");
}