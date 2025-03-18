/**
 * Encadenar promesas
 */

let promesa1 = new Promise((resolve, reject)=>{
    resolve(12);
})

let promesa2 = new Promise((resolve, reject)=>{
    resolve(15);
})

/**
 * Cada vez que nosotros usemos el método 'then' lo que va hacer
 * retornar una nueva promesa
 */
promesa1.then(valor =>{
    /**
     * Las promesas se resuelven pero no se resuelven con ningun valor, para
     * nosotros resolver con un valor tenemos que retornarlo 
     */
    //console.log(valor)
    //return valor + 18;
    //Ahora el valor se agregara a la siguiente promesa, encadenandola

    if(valor > 10){
        return promesa2;
    }

    /**
     * Si nosotros estamos dentro del contexto de '.then' podemos hacer
     * retornar un valor y ese valor se le va inyectar al siguiente
     * '.then'
     */

}).then(valor2 =>{
    
    console.log('la segunda promesa', valor2)
})