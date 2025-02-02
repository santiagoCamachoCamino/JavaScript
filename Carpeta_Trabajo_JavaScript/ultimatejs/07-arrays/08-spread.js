/**
 * Spread nos permite combinar los arrays pero de una manera mas
 * facil y flexible
 */

let arr1 = [1,2];
let arr2 = [5,6];

let arr3 = [...arr1];
//console.log(arr3);//[1,2]
//toma todos los elementos que se encuentran en el array
//y se los agrega al nuevo elemento, pero lo hace de manera
//flexible, lo podemo agregar ya sea al final o al comienzo
arr3= [...arr1, 3, 4];
console.log(arr3);//[1,2,3,4]

arr3 = [...arr1,3,4,...arr2];
console.log(arr3);//[1,2,3,4,5,6]

arr3 = [0,...arr1,3,4,...arr2,7,8];
console.log(arr3);//[,0,1,2,3,4,5,6,7,8]

/**
 * Spread me puede generar copias, las cuales no estan referenciadas
 * 
 */

let arr4 = [...arr3];
arr3.pop();

console.log(arr3, arr4);
//[0,1,2,3,4,5,6,7]
//[0,1,2,3,4,5,6,7,8]


