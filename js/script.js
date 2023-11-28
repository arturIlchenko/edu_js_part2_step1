'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {

	},
	actors: {

	},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
			secondQuestion = prompt('На сколько оцените его?', '');
		if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
			personalMovieDB.movies[firstQuestion] = secondQuestion;
		} else {
			i--;
		}
	};
};

rememberMyFilms();

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		const question = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
		personalMovieDB.genres[i] = question;
	}
};

writeYourGenres();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Просмотренно довольно мало фильмов');
	} else if (personalMovieDB.count < 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		alert('Вы киноман');
	} else {
		alert('Произошкла ошибка')
	}
};

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
};

showMyDB(personalMovieDB.privat);

