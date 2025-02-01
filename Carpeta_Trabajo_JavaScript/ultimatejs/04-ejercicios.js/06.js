/**
 * Crear un algortimo que devuleva la cantidad 
 * de números positivos de un array
 */

let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(array){
    let contador=0;
    for(let valor of array){
        if(valor > 0){
            contador++;
        }
    }
    return contador;
}

let resultado = cuantosPositivos(array);
console.log(resultado);