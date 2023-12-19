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
	privat: true,

	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const firstQuestion = prompt('Один из последних просмотренных фильмов?', '').trim(),
				secondQuestion = prompt('На сколько оцените его?', '').trim();
			if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
				personalMovieDB.movies[firstQuestion] = secondQuestion;
			} else {
				i--;
			}
		};
	},

	writeYourGenres: function () {
		for (let i = 1; i < 4; i++) {
			const question = prompt(`Ваш любимый жанр под номером ${i}`, '');
			if (question != null && question != '') {
				personalMovieDB.genres[i - 1] = question;
			} else {
				i--;
			};
		};
		personalMovieDB.genres.forEach((element, index) => {
			console.log(`Любимый жанр № ${index + 1} - это ${element}`);
		})
	},

	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			alert('Просмотренно довольно мало фильмов');
		} else if (personalMovieDB.count < 30) {
			alert('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			alert('Вы киноман');
		} else {
			alert('Произошла ошибка')
		}
	},

	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},

	toggleVisibleDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false
		} else {
			personalMovieDB.privat = true
		}
	}
};

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleDB();

personalMovieDB.showMyDB(personalMovieDB.privat);