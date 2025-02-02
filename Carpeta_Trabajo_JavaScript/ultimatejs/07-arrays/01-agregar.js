const letras = ['a', 'b'];

//Metodos para modificar el contenido de un Array

//agrega al final del array
letras.push('c', 'd');//[a, b, c, d]

//agregar al comienzo del array
letras.unshift('y', 'z');//[y, z, a, b, c, d]

//agregar elementos entre indices
/**
 * 1er argumento el indice desde dobnde empezamos agregar
 * 2do arg elemento que queremos eliminar, 0 si no eliminas
 * 3er .., los argumentos a integrar
 */
letras.splice(3, 0, 1, 2)
//[y, z, a, 1, 2, b, c, d]
// 0  1   2  3  4 

console.log(letras);