/**
 * Agregar ID
 */

let objeto  = {name: "Nicolas"};

function agregarId(obj){
    obj.id=Math.random();
}
//Ejercicio corregido
function agregarId(obj){
    if(typeof(obj) === 'object'){
        obj.id=Math.random();
    }
   
}
agregarId(objeto);
console.log(objeto);