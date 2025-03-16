function suma(fn, ...rest){
    const suma= rest.reduce((acc, el)=> {
        return acc + el;
    }, 0)
    return fn(suma);
}

suma(resultado =>{
    console.log(resultado);
}, 1,2,3,4)

/**
 * Ejercicio Corregido
 */
function suma(fn, ...rest){
    const suma= rest.reduce((acc, el)=> {acc + el;})
    fn(suma);
}