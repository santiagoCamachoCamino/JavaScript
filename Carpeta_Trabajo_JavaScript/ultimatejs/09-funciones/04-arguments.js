function suma(a,b){
    console.log(arguments);//Nos permite ver todos los arguemntos que se estan enviando
    //Nos devuelve un objeto/iterador

    /**
     * si quisieramo acceder a todos los argumentos
     */
    // let total = 0;
    // for(let valor of arguments){
    //     total += valor;
    // }
    // return total;

    /**
     * Otro metodo
     */
    return Array.from(arguments).reduce((acc,el)=>acc+el);
    //si no le indicamos el acumulador, toma el valor del primer elemento
}

console.log(suma(1,2,3,4))
/**
 * En JavaScript podemos enviar argumentos a nuestran funciones
 * sin que se hayan declarado antes, lo cual nos devolvera
 * NaN(not a number)
 */