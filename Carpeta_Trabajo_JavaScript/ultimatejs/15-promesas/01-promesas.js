/**
 * Las promesas en JavaScript representan el estado de una petición, y este
 * estado podría ser pendiente(pending), rechazada(rejected) y terminada
 * (fulfilled).
 * Pendiente quiere decir la que petición todavia se esta realizando.
 * Rejected quiere decir que la promesa ha sido rechazada.
 * Fulfilled es que la promesa se cumplio con exito.
 * 
 * Las promesas se utilizan para tareas como:
 * -Consultas a bases de datos
 * -peticiones a servidores
 * -Webworkers
 */

/**
 * Declaramos una variable que es una nueva instancia de una función
 * constructora de Promise, que esta recibe una función y la fucnión tiene
 * dos argumentos
 */
let promesa = new Promise((resolve, reject) => {
    //Si nosotros queremos que nuestra promesa resuelva en algo usamos
    // resolve(42);

    //Para ver el estado de Pending
    // setTimeout(()=>resolve(42), 10000)

    //para ver el estado de rejected
    // setTimeout(()=>reject(42), 10000)

    /**
     * Ahora vamos a escribir logica si para ver si los datos recibidos
     * se encuentran bien o mal, si se encuentran bien, vamoa a resolver
     * la promesa si no la rechazamos
     */

    setTimeout(()=>reject('Error de carga'), 10000)//mensaje de error

})

console.log(promesa);
//Fulfilled
// Promise {<fulfilled>: 42}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled" nos indicasu estado
// [[PromiseResult]]: 42 resultado

//Pending
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending" nos indica su estado
// [[PromiseResult]]: undefined y su resultado esta indefinido

//Rejected
// Promise {<rejected>: 42}
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected" estado rechazado
// [[PromiseResult]]: 42 pero con un valor definido

/**
 * Las promesas se utiliza para capturar valores que se van a resolver en
 * un futuro
 */


/**
 * Una forma de manejar los errores
 * Este método recibe dos funciones, 1ro el onfulfilled es lo que se va
 * ejecutar si se resuelve correctamente, 2do es onrejected se ejcuta si 
 * en caso la función ha sido rechazada
 */

promesa.then(
    valor => console.log(valor),
    e =>console.log('error', e),
)