/**
 * 
 * El 'Async Await' es una forma de manejar las promesas de una manera mas
 * clara limpia, evitando la anidacion y flujo de código
 */

let promesa1 = param1 => new Promise((res, rej) =>{
    //calcular algo
    const b = 'hola mundo';
    res(b);
});

let promesa2 = param2 => new Promise((res, rej) =>{
    //calcular algo
    res(param2 + ', hola mundo');
});

let promesa3 = (param1,param2) => new Promise((res, rej) =>{
    //calcular algo
    res('chanchito feliz');
});
/**
 * Aquí lo que tenemos es una promesa que resuelve el primera valor
 * y se lo inyecta a 'a', el cual este resuelve con otro resultado y se
 * lo pasa a b
 */
Promise.resolve('Primer valor')
    .then(a => promesa1(a))
    .then(b => promesa1(b))
    /**
     * Que es lo que pasaría si necesitacemos volver a llamar otra promesa
     * con los valores 'a' y 'b', pues para ello debemos pasarle un contexto
     * lo cual JavaScript es algo que ya tiene implementado, anteriormente
     * se le pasaba el contexto a cada promesa, por lo que resulta tedioso
     */
    .then((a, b) => promesa3(a, b)) 

async function main() {
    /**
     * Podemos comenzar a obtener los valores los cuales resuelven las 
     * promesas, mediante await, en donde esta palabra reservada dentro
     * de funciones que contengan el nombre de 'asyn' antes de la palabra
     * reservada de function, nos va permitir a nosotros obtener el valor en
     * el que resuelven las promesas
     */
    /**
     * Si en caso de que nuestras promesas sean rechazadas podemos envolver
     * en un try catch
     */
    try {
        const a = await Promise.resolve('primer valor');
        const b = await promesa1(a);
        const _ = await promesa2(b);
        promesa3(a,b)
    } catch (error) {
        console.log(error)
    }
  
}

main();