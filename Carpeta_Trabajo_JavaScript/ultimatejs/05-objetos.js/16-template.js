const saludo = "Hola mundo! \nbienvenido a \"ultime javascript\" :) ";

const nombre = 'Nicolas';
const apellido = 'lopez'
const nombreCompleto = nombre + ' '+ apellido;

function plantilla(nombre){
    return `Hola ${nombre}!

Bienvenido a "Ultimate JavaScript :)

Cariños Nico".`;

}
// const plantilla = `Hola ${nombre} ${apellido}!

// Bienvenido a "Ultimate JavaScript :)

// Cariños Nico".`;

// console.log(plantilla);
console.log(plantilla(nombre));
/**
 * Con los template strings `` podemoas llamar
 * a variables, funciones, realizar operaciones
 */