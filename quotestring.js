/*sometimes you will want to use a doble or single quotes mark within a string.
because strings can live in single or doble quotes,if you just want to use doble quotes in the string,you could surraound the entire string in single quotes.
*/
var title;
var message;
title = "molly's special offers";
message = '<a href ="sale.html">25% off</a>';

var elTitle = document.getElementById("title");
elTitle.innerHTML = title;
var elNote = document.getElementById("note");
elNote.innerHTML = message;
