/**
 * Indice validar que no sea menor a cero y que el elemento exista
 * en el array
 */

function getByIdx(arr, idx){
    // if(idx >=0 && idx < arr.length){
    //     for(let i=0;i < arr.length; i++ ){
    //         if(i === idx){
    //             return console.log(arr[i]);
    //         }
    //     }
    // }else{
    //     return 'Indice no encontrado'
    // }

    //Ejercicio corregido

    if(idx < 0 || idx >= arr.length ){
        return 'Indice no encontrado'
    }else{
        return arr[idx];
    }

    

}

let resultado = getByIdx([1,2], 0);
console.log(resultado);