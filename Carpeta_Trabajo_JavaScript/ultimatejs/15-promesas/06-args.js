/**
 * Para pasar argumentos a nuestras promesas podemos transformla
 * en una fat arrow function, que lo que hará es retornar una promesa
 */
let promesa1 = user =>new Promise((resolve, rejec)=>{

    resolve(user);
})

let promesa2 = user => new Promise((resolve, rejec)=>{
    resolve(user + ', hola mundo');
})

/**
 * Aquí le estamos pasando un argumento a nuestra promesa a la cual resuelve
 * y luego le pasa la usuario a la segunda promesa, para luego imprimirlo
 */
promesa1('chanchito feliz')
    .then(user => promesa2(user))
    .then(dato => console.log(dato))