const letras = ['a', 'b', 'c', 'd'];

/**
 * Buscar elementos dentro de un Array
 */
/**Indexof devuelve el indice del elemeto a 
buscar, si no encuentra devuelve '-1'
*/
console.log(letras.indexOf('c')); //2
console.log(letras.indexOf(1)); //-1
//Devuelve el indice de la primera coincidencia
const letras2 = ['a', 'b', 1, 'c', 'd', 1];
console.log(letras.indexOf(1)); //2
//le podemos indicar desde donde quiere que empiece
//la busqueda
//1er arg elemento a buscar
//2do arg indice de donde queremos empezar, lo incluye
console.log(letras2.indexOf(1, 3));//5


//LastIndexOf empieza la busqueda desde el ultmimo elemento
console.log(letras2.lastIndexOf(1)); //5



/**
 * Includes devuelve true or false si el elemento se encuentra
 */

console.log(letras2.includes('d'));//true

//otra forma
console.log(letras.indexOf(1) !== -1); //true

