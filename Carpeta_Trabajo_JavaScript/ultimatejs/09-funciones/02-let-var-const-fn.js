// console.log(saludo);
// console.log(vieja);
// console.log(hola);
// console.log(chao);


function saludo(){};
let hola = 'hola';
const chao = 'chao';
var vieja = 'porque no debes usar esta';

console.log(window);
/**
 * Si declaramos las variables con var y function, estas
 * iran a parar a los objetos de window.
 * Esto es importante, ya que pueden haber librerias, que lo
 * que hagan es crear funciones con fuction o variables con var,
 * por lo que si creamos algo despues, con el mismo nombre de las variables
 * lo que hará es reemplazar la dependencia que tenia en la libreria.
 */