/**
 * Crear un algoritmo que tome un array
 * de objetos y devuelve un array de pares
 */

let array = [{
    id:1,
    name:'Nicolas',
}, {
    id:2,
    name:'Felipe',
}, {
    id:3,
    name:'chanchito',
}];

// function toPairs(array){
//     let par1;
//     let par2;
//     let par3;
//     for( let objeto of array){
//         for(let prop in objeto){

//             console.log(prop);
//         }
//         console.log(objeto)
//     }
// }

// Ejercicio corregido

function toPairs(array){
    let pairs=[]; //le indicamos que es un array

    for( let indice in array){//utilizamos for in porque nos devuelve el indice
        let elemento = array[indice];
        pairs[indice]=[elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);
