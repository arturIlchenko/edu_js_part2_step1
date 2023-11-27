'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {

	},
	actors: {

	},
	genres: [],
	privat: false
}
//  first way 

// for (let i = 0; i < 2; i++) {
// 	const firstQuestion = prompt('Один из последних просмотренных фильмов?', '');
// 	if (!firstQuestion || firstQuestion.length > 50) {
// 		i--;
// 		continue;
// 	}
// 	const secondQuestion = prompt('На сколько оцените его?', '');
// 	personalMovieDB.movies[firstQuestion] = secondQuestion;
// };

for (let i = 0; i < 2; i++) {
	const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
		secondQuestion = prompt('На сколько оцените его?', '');
	if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
		personalMovieDB.movies[firstQuestion] = secondQuestion;
	} else {
		i--;
	}
};

// second way

// let i = 0;

// while (i < 2) {
// 	const firstQuestion = prompt('Один из последних просмотренных фильмов?', '');
// 	if (!firstQuestion || firstQuestion.length > 50) {
// 		i--;
// 		continue;
// 	}
// 	const secondQuestion = prompt('На сколько оцените его?', '');
// 	personalMovieDB.movies[firstQuestion] = secondQuestion;
// 	i++;
// }

// third way

// let i = 0;

// do {
// 	const firstQuestion = prompt('Один из последних просмотренных фильмов?', '');
// 		if (!firstQuestion || firstQuestion.length > 50) {
// 			i--;
// 			continue;
// 		}
// 		const secondQuestion = prompt('На сколько оцените его?', '');
// 		personalMovieDB.movies[firstQuestion] = secondQuestion;
// 		i++;

// } while (i < 2);

if (personalMovieDB.count < 10) {
	alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
	alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	alert('Вы киноман');
} else {
	alert('Произошкла ошибка')
}

console.log(personalMovieDB);