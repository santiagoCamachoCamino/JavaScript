let promesa1 = new Promise((resolve, reject)=>{
    resolve(12);
})

let promesa2 = new Promise((resolve, reject)=>{
    resolve(15);
})

/**
 * Si en caso de que algunas de estas promesas ocurre un error, podemos
 * capturarlo para asi luego manejarlo.
 * El catch solo se activa si existiera un error, si en caso no hay error
 * se obvia el catch, si en caso de que el error este al inicio, este no ejecuta
 * el resto del codigo y va directamente al catch
 */

promesa1
.then(valor =>{
   
    if(valor > 10){
        return promesa2;
    }

})
.then(valor2 =>{
    
    return valor2;
})
.catch(e => console.log(e))//aqui se mostraria el error
/**
 * Este método se va ejecutar siempre, si fue rechazada o fue
 * con exito resuelto, por lo general no recibe argumentos
 * y se usa mucho para cuando estamos realizando una carga o el
 * icono de carga
 */
.finally(() => console.log('acá estamos en finally '))