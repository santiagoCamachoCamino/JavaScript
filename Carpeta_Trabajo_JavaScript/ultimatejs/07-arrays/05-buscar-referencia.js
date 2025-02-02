
const usuario = [
    {id:1, name: 'Chanchito'},
    {id:1, name: 'Felipe'},
    {id:2, name: 'Feliz'},
]

const resultado = usuario.indexOf({id:1, name: 'Chanchito'});
console.log(resultado); //-1 
/**
 * Nos devuelve '-1', porque se esta accediendo a la referencia,
 * mas no al objeto directamente, ya que se encuentra guardado en
 * otro espacio
 */



//Para buscar elementos referenciados en un array usamos
/**
 * find recibe una función y la funcion recibe un parametro, que es un
 * elemento del array que estamos iterando, si el array tiene mas de 
 * un elemento, la siguiente vez, se iterara al segundo elemento
 * 
 */

//El metodo find devuelve la primera coincidencia, por eso nos tenemos
//que asegurar la propiedad sea unica
const resultado2 = usuario.find(function(usuario){

    return usuario.id === 1;
});
/**
 * Al tipo de metodos que le tenemos que pasar otras funciones o
 * metodos y devuelve true or false, se las conoce como 
 * Predicate
 */
//Otra forma de escribirlo
const resultado3 = usuario.find(usuario => 
    usuario.name === 'Chanchito');

/**
 * Con el metodo find tambien podemos buscar el indice del objeto
 * 
 */

const resultado4 = usuario.findIndex(usuario =>
    usuario.name === 'Chanchito'
); //Nos devolvera el indice en este caso 0

console.log(resultado2); //{id:1, name:'chanchito}

