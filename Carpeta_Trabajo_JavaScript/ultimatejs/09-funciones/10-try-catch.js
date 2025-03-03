function sumaTodo(arr){
    if(!Array.isArray(arr)){
        throw new Error('El parámetro no es un array')
        /**
         * El throw lo utilizamos para lanzar excepciones o errores person
         * alizados, para despues transferirlos al try-catch, y lo que también hace 
         * es que se interrumpe, ya no ejecuta el resto de la función
         */
    }
    return arr.reduce((acc, el) =>{
        //Tambien pueden existir errores dentro, si hay strigns, dentro del array
        if(typeof el !== 'number' || Number.isNaN(el)){
            throw new Error(`Elemento ${el} no es un número`)
        }
        return acc + el;
    });
}

console.log(sumaTodo([1,2,3,4]));

console.log(sumaTodo([1,2,NaN, 'hola mundo']))//Elemento ${el} no es un número
/**
 * En casos donde nuestro codigo podria lanzar un error
 * y puede venir de muchas partes usamos un try catch
 */
//En volvemos el codigo en un bloque try
try{
    console.log(sumaTodo({prop:1}));
} catch (e){ //capturamos el error
    console.log(e);
    console.log(e.message);//El parámetro no es un array
}

console.log('despues del try cathc')