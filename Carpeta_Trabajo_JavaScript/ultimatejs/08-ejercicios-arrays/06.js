const miArray=[
    "hola",
    12,
    "mundo",
    true,
    {},
    {id:15},
    ['lala'],
];

function diviePorTipo(arr){
    // return arr.reduce((accu, elemento) =>({
    // Number: arr.filter(u=> typeof(u) === 'number'),  
    // Boolean: arr.filter(u=> typeof(u) === 'boolean'),  
    // String: arr.filter(u=> typeof(u) === 'string'),  
    // Object: arr.filter(u=> typeof(u) === 'object'),  
    // }), {})
    /**
     * EJERCICIO CORREGIDO
     * en este caso el acc es un {} vacio lo cual a lo largo que se va
     * recorriendo, se va llenando, por ejemplo, 
     * el primero elemento es un string, se veria reflejado asi
     * { "string":[]}, como el accumulador esta vacio este asigna un array vacio
     * , pasariamos al siguiente elemento, que es un number, que al estar este sin
     * assignar, crea un arary vacio, se veria así {"string":[], "number":[]}
     */
    return arr.reduce((acc, el)=>{
        let llave = typeof el;
        acc[llave] = acc[llave] ? acc[llave] : [];
        acc[llave].push(el);
        return acc;
    }, {});
}

let arr = diviePorTipo(miArray);
console.log(arr);
