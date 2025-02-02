/**
 * Primera opcion para vaciar un array, 
 * asignarle un array vacio
 */
let arr = [1, 2];
arr = [];
//sin embargo esto nos puede dar error
let arr1=[1,2];
let arr2 = arr;
arr = [];
console.log(arr2, arr);//[1,2] []
//el contenido de array 2 sigue siendo el mismo,
//por lo que no seria un buen metodo para vaciar

/**
 * Segunda opcion para vaciar, es manipular la 
 * longitud del array
 */
let arr3=[1,2]
arr3.length = 0;//convierte la longitud del array en 0
console.log(arr3); //[]

/**
 * Tercera opcion para vaciarlo, es haciendo un
 * splice
 * 1er arg indice desde donde queremos empezar
 * 2do arg hasta donde queremoe eliminar
 */

let arr4 = [1,2];
arr4.splice(0, arr4.length);
console.log(arr4); //[]

/**
 * Opcion no recomendada
 */

// while (arr4.length > 0){
//     arr.pop();
// }