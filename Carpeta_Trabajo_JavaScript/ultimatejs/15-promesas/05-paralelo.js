/**
 * Ahora vamos a ver como procesar nuestras promesas en paralelo
 */

const p1 = Promise.resolve(3);//promesa que resuelve directamente en un valor
/**
 * Cuando nostros estamos trabajando con valore primitivos, como un string,
 * y lo metemos en una cadena de promesas o promesas en paralelo estas
 * tambien van estar consideradas como promesas
 */
const p2 = 42;

const p3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, 'foo')
})

/**
 * Lo primero que debemos hacer es resolver todas las peticiones, por lo 
 * usamos 'all', que recibe un array, donde se van encontrar todas las
 * promesas que vamos a resolver.
 * La forma en la que funciona este método estatico de all es que
 * va esperar a que resuelva p1, pero al mismo tiempo en paralelo va
 * esperar a que se resuelva p2 y p3, y luego que todas hayan sido 
 * resueltas se va ejecutar el método 'then'.
 * Si una de estas es rechazada, el método a ejecutar es el 'catch'
 */
Promise.all([p1, p2, p3])
    .then(valores => console.log('all', valores))
    .catch(e=>console.log('error en all', e));

/**
 * Método estático Race, este a diferencia de all va esperar a que se resuelva
 * la primera promesa, al igual recibe un array con las promesas.
 * Lo importante es que cualquier promesa que resuelva primeroa
 * la mostrara y ejecutara el then.
 * Caera en el catch cualquiera que sea rechazada primero
 */

Promise.race([p1, p2, p3])
    .then(valor=>console.log('race', valor))
    .catch(e=>console.log('error en all', e))

/**
 * Método estático Any: funciona muy parecido a 'race', toma la primera promesa
 * que sea resuelta, pero si esta fue rechazada, any va ignorar esta promesa
 * y va ir a la segunda en ser resuelta.
 */

Promise.any([p1, p2, p3])
    .then(valor =>console.log({valor}))
    .catch(e=>console.log(e));
/**
 * Si la primera fuera rechazada mostraria
 * {42} que es la segunda promesa en resolverse primero
 */


/**
 * Método estatico 'allSettled': este método independientemente si las
 * promesas son rechazadas o resueltas estasn se van a envolver en un objeto
 * con la propiedad de status, reason si fue rechazada y value si fue
 * resuelta.
 * Este método nos indica si una pronesa fue resuelta o rechazada y si es 
 * resuelta nos muestra en una propiedad de value.
 * Si rechazaramos todas las promesas, este se ejecutara el código del
 * '.then', devolviendos igualmente un array con objetos con el 'estado' y
 * 'reason'. Si nosotros trabajaramos con promesas que fueramos a rechazar
 * deberiamos pasarle una razon
 */

Promise.allSettled([p1, p2, p3])
    .then(valores => console.log({valores}))
    .catch(e=>console.log(e));