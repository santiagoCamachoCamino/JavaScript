// AND, OR, NOT

// AND -> &&

let mayor = false;
let suscrito = true;
// console.log(true && true); //true
// console.log(false && true) //false
console.log('operador and', mayor && suscrito); // false
/*
las dos expresiones tienen que ser verdaderas, para que devuelva 'true', 
si una es falsa devuelve 'false'
*/

// OR -> ||

console.log('operador or', mayor || suscrito); //true
/*
una de las dos expresiones tiene que ser verdadera, para que ddevuelva 'true',
si las dos son falsas devuelve 'false'
*/

// NOT !
console.log('operador not', !mayor); //true
/*
nos pasa a invertir el valor
*/
let soloCatalogoInfantil = !mayor;