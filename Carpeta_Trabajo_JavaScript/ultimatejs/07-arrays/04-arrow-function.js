// function hola(){
//     return 'Hola Mundo'
// }

/**
 * Otra forma de escribir estas funciones mediante 'Fat arrow function'
 * , todas estas funciones son anonimas y se recomienda usar el const
 * 
 */
const hola = () =>{
    return 'Hola mundo';
}

//Estas arrow functions viene con el return incluido, pero
//solo funciona si es solo de una linea
const hola2 = () => 'hola mundo';

//capturar argumentos
//si solo se pasa un argumento se puede omitir los ()
const hola3 = (mensaje) => mensaje+ 'Hola mundo';
const hola4 = mensaje => {
    return mensaje + 'Hola mundo';
}
const resultado = hola();
console.log(hola2());// hola mundo

console.log(hola3('chanchito feliz'));// chanchito feliz hola mundo