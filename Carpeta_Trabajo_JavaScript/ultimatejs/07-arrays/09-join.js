/**
 * La forma de unir arrays, lo hacemos con el Join el cual
 * recibe como
 * 1er argumento el separador
 */

let arr1 = ['noclas', 'Chanchito', 'Felipe'];
let mensaje = arr1.join(', ');
console.log(mensaje); //Nicolas, Chanchito, Felipe

//Para poder separarlos mediante Split, el cual realiza un corte 
//con el separador que le inidcamos, y nos devuelve un array
//1er arg un separador obligatorio
let saludo = "Hola mundo! desde NZ";
let dividido = saludo.split(" ");
console.log(dividido);//['hola', 'mundo', 'desde', 'NZ']


//Para crear una URL o volverlo s juntar usamos de nuevo Join

console.log(dividido.join('-'));//Hola-mundo!-desde-NZ
