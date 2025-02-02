let arr1 = [1,2];
let arr2 = [3,4];
/**
 * Para combinar arrays, metodo concat, el cual
 * nos devuelve un nuevo array
 */
let combinados=arr1.concat(arr2);

console.log(combinados, arr1, arr2);
//[1,2,3,4] [1,2] [3,4]


/**
 * Para dividir un array con el metodo slice, la cual nos devuleve
 * un nuevo array, con los datos que queremos
 * 1er arg el indice de donde queremos empezar
 * 2do arg el indice hasta donde quiere terminar, el cual no se incluye
 */

let divididos = combinados.slice(1, 3)//[2,3]
console.log(divididos);

/**
 * Otra forma de dividir los arrays, con el metodo slice, es solomaente 
 * con un argumento, donde se empieza con el indice indicado hasta el
 * final
 */
let divididos2 = combinados.slice(1)//[2,3,4]

/**
 * Podemos usar Slice para generar una copia del array, las cuales
 * son copias de referencia
 */

let copia = combinados.slice();
console.log(copia);//[1,2,3,4]