const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
console.log(numberOfFilms);
    
const personalMovieDB = {

count: numberOfFilms,
movies: {},
actrors: {},
generes: [],
privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('На сколько оцените его?', '');
      
      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);