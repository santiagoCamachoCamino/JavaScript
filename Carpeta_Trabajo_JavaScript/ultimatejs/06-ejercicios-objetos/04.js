/**
 * Cuales son metodos
 */

let objeto ={
    id:1,
    name: 'Chanchito',
    login: function(){},
    logout: function(){},
}

// function cualesMetodo(obj){
//     for(let llave in obj){
//         if('login' in  obj) {
//             /**
//              * siempre imprime el console log porque siempre verifica que sis existe
//              * el login dentro del obj, por lo que siempre devuelve true
//              */
//             console.log(llave);
//         }
//     }
   
// }

//ejercicio corregido
function cualesMetodo(obj){
    for(let llave in obj){
        if(typeof obj[llave] === 'function') {
            console.log(typeof(obj[llave]))
            console.log(llave);
        }
    }
    
 }

cualesMetodo(objeto);