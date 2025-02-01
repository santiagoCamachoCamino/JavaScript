/**
 * Crear algoritmo que devuelva un array
 * de objetos en base a pares
 */

let pairs = [
    [1, {name:'nicolas'}],
    [2, {name:'felipe'}],
    [3, {name:'chanchito'}],
]

// function toCollection(array){
//     let pares=[];
//     for(let indice in array){
//         let par=array[indice];
//         pares[indice]={
//             id:par[indice], 
//             name:par[indice-1]
//         };
//     }

//     return pares;
// }

//Ejercicio COrregido
function toCollection(array){
    let pares=[];
    for(let indice in array){//Usar for in para acceder al indice
        let par=array[indice]; //aqui accedemos al elemento
        pares[indice]= par[1];
        pares[indice].id=par[0];
    }

    return pares;
}

console.log(toCollection(pairs));