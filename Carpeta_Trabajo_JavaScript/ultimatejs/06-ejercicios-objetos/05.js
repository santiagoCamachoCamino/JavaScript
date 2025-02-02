/**
 * Propiedad existente
 */

let objeto ={
    id:1,
    name: 'Chanchito',
    login: function(){},
    logout: function(){},
}

let propiedad = 'names';
function tieneProp(obj, propiedad){
    let resultado = false
    if(propiedad in obj){
        resultado = true;
    }

    return resultado;
}

//Ejercicio corregido
function tieneProp(obj, propiedad){
    //Obtener listado de todas las propiedades
    let props=Object.keys(obj);

    for(let prop of props){
        if (propiedad == prop){
            return true;
        }
    }
    return false;
}
console.log(tieneProp(objeto, propiedad));