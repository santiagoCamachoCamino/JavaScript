// let a = 1;
// let b = a;

// b++;

// console.log(a, b);// 1 2

// let a = {};
// let b = a;

// b.prop = 1;
// console.log(a ,b);
//{prop:1} {prop:1} 
/**
 * Lo que sucede es que a y b tienen la misma rerencia, para acceder a los 
 * propiedades, si se elimina o se agrega algo, se vera reflejado desde cualuquier
 * variable, porque a y b son solo la referencia, no el objeto en si
 * 
 */


//Funciones
let a = 1;

function suma(n){
    n++;
}
suma(a);
console.log(a); //1
/**
 * Devuelve 1, porque cada vez que definimos parametros, JavaScript va crear una variable
 * especial para ese parametro, entonces en este caso tenemos nuestra variable 'a' y más
 * abajo la variable 'n', lo cual JavaScript considera que son dos variables distintas, a la
 * cual 'n' se ha guardado localmente y no se ha hecho un return
 */

//Objetos

// let a = {prop:1};

// function suma(n){
//     n.prop++;
// }

// suma(a);
// console.log(a); // 2 
/**
 * Devuelve dos porque estamos accediendo a la misma referencia, permitiendo
 * modificar sus propiedas.
 * 
 */
