/**
 * Objetos similares
 */

function similares(obj1, obj2){
    for(let llave in obj1){
        if(obj1[llave] === obj2[llave]){
            return true;
        }else{
            return false;
        }
    }
}

let resultado = similares(
    {id:1, name:'Nico'},
    {id:1, name:'Feli'}
)
console.log(resultado);

//Ejercicio corregido
function similares(obj1, obj2){
    let distintos = false
    for(let llave in obj1){
        if(obj1[llave] !== obj2[llave]){
            //Nos preguntamos si los dos valores son distintos
            distintos= true;
        }
    }
    /**
     * En caso de que un valor sea disitno, esto nos da entender que 
     * ya no son iguales, por lo que seria falsey aplicamos un not
     */
    return !distintos;
}