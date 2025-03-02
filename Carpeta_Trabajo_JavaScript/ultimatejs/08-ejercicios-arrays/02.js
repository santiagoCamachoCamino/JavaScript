const miArray=[
    "hola",
    12,
    "mundo",
    {},
    {id:15},
    ['lala'],
];

function diviePorTipo(arr){

    return {
        numeros:arr.filter(num => typeof(num) === 'number'),
        strings:arr.filter(str => typeof(str) === 'string'),
        objects:arr.filter(num => typeof(num) === 'object')

    }

    /**
     * Ejercicio corregido
     * Lo que estamos haciendo es que devolvemos un objeto con los siguientes
     * atributos de numeros, strings, objetos, para despues proceder a filtrar
     * cada  
     */
}

const nuevoArray = diviePorTipo(miArray);
console.log(nuevoArray);