const numberOfFilms =+prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	cout: numberOfFilms,
	movie:{},
	actors:{},
	genres:{},
	privat:false
};

const a = prompt("Один из последних просмотренных фильмов", ""),
	b = prompt("На сколько оцените его",""),
	c = prompt("Один из последних просмотренных фильмов", ""),
	d = prompt("На сколько оцените его","");
      
personalMovieDB.movie[a] = b ;    
personalMovieDB.movie[c] = d ;     
console.log(personalMovieDB);

"use strict";
if (4 == 4) {
	console.log("ok");
} else {
	console.log("error");
}


if(num < 49) {
	console.log("Error");
} else if (num > 100) {
	console.log("Много");
} else {
	console.log("ok");
}

(num == 50) ? console.log("ok!") : console.log ("Error");

const num = "50";
switch (num) {
case "49":
	console.log("Неверно");
	break;
case "100":
	console.log("Неверно");
	break;
case "50":
	console.log("В точку");
	break;
default:
	console.log("Не в этот раз");
	break;
}

if (4 == 4) {
	console.log("OK");
} else {
	console.log(Error);
}

const num = "Hello world";
console.log(num);

let vi = (8*2+2);
console.log(vi * 2);

let mik = 1;
if (mik == 10) {
console.log("GOOD");
} else if (mik < 10) {
console.log("Недостаточно");
}

const pir = 1;
switch (pir) {
    case 10:
        console.log("Готово");
        break;
        default:
            console.log("Не в этот раз");
            break;
}