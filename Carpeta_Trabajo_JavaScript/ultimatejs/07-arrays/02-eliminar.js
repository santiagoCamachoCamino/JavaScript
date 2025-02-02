const letras = ['a', 'b', 'c', 'd'];

//quitar elementos del final/ultimo elemento
const final = letras.pop();

console.log(final, letras);
//d
//[a, b, c]

//eliminar el primer elemento
const comienzo = letras.shift();
console.log(comienzo, letras);
//a
//[b,c,d]


//eliminar elementos entremedio
/**
 * 1er arg desde cual indice se comienza
 * 2do arg cuantos elementos eliminamos
 */
letras.splice(1, 2);
console.log(letras);
//[a, d]



