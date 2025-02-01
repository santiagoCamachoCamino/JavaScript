/**
 * Crear algoritmo que devuelva un número menor
 * y mayor de un array
 */

let array=[2,5,7,15,-5,-100, 55];

function getMayorMenor(array){
    let numeros;
    let numMayor = 0;
    let numMenor;
    for(let valor of array){
        if(valor > numMayor){
            numMayor=valor;
        }else{
            numMenor=valor;
        }
    }

    return numeros=[numMayor, numMenor];
}

let numeros=getMayorMenor(array);
console.log(numeros);


//Ejercicio corregido
function getMayorMenor(array){
    let menor = array[0];
    let mayor = array[0];
    for( numero of array){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }

    return [menor, mayor];
}


