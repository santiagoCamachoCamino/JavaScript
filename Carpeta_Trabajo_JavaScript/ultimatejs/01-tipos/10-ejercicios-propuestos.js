/**
 * Ejercicio 1: Datos de Identifcación
 * En este primer ejercicio vamos a definir variables, realizaremos una carta de identificación 
 * en la que colocaremos datos de un usuario, pero tendremos que definir ya sea con { let } o con 
 * { const } dependiendo de que si el dato puede modificarse o no.Los datos que definiremos son: 
 * nombre, apellido, fecha de nacimiento, dirección, edad, país de nacimiento, y si tiene una 
 * suscripción activa en la Academia Hola Mundo.Al final, deberás imprimir estos todos estos 
 * datos de manera que podamos leerlos en la consola
 */

const nombre = 'Santiago';
const apellido = 'Camacho';
const fechaNacimiento = '22/09/2003';
const direccion='calle de Cifuentes 17';
let edad=21;
const paisNacimiento= 'Ecuador';
let suscripcion= false;

console.log('--Carta de Identificación--');
console.log('Nombre:', nombre);
console.log('Apellido:', apellido);
console.log('Fecha Nacimiento:', fechaNacimiento);
console.log('Dirección:', direccion);
console.log('Edad:', edad);
console.log('País de Nacimiento:', paisNacimiento);
console.log('Suscripcion Activa:', suscripcion);
console.log('--Fin de los Datos');


/**
 * Ejercicio 2: Datos de un jugador.
 * ¿Cómo funciona?En este ejercicio, vamos a editar las estadísticas de un jugador de fútbol, 
 * en una variable que se llamará { pasesJugador }, lo cual definiremos en una variable que 
 * el valor inicial de los pases de este jugador será { null }, ya que este no tendrá pases 
 * inicialmente.Lo siguiente será asignar a esta variable un número de pases, el cual será 18. 
 * Posteriormente, ya no necesitamos el número de pases, sino la efectividad de sus pases, por 
 * lo que en una siguiente línea cambiaremos el valor a un valor en %, este será el valor de 87%.
 * Asegurate de imprimir en la consola cada uno de estos cambios
 */

let pasesJugador= null;
console.log(pasesJugador);
pasesJugador=18;
console.log(pasesJugador);
pasesJugador='87%';
console.log(pasesJugador);

/**
 * Ejercicio 3: Crear listas.¿Cómo funciona?Para este ejercicio, tendremos que definir 
 * una lista de compras, pagos y pendientes,  cada uno de estos pendientes deberá ser un string. 
 * Para los siguientes ejemplos de listas:
 * - Haremos una lista de compras.
 * - Una de deseos de compra.
 * - Una de pendientes
 * Al final deberemos imprimir cada una de nuestras listas
 */

let lista1=['arroz', 'leche', 'huevos', 'pan'];
let lista2=['mi titulo', 'trabajo bien remunerado', 'otra fuente de ingresdo'];
let lista3=['mi curriculum', 'actualizar mi portafoli', 'actualizar mi linkdind']

console.log('Lista 1:', lista1)
console.log('Lista 2:', lista3)
console.log('Lista 3:', lista3)

/**
 * Ejercicio 4: Lista de stock con valores null.
 * ¿Cómo funciona?En este ejercicio, trabajamos en una tienda, y tenemos un script se encarga de 
 * contar aquellos productosde los que no tenemos stock y aquellos que en nuestra base de datos 
 * no se ha agregado su valor de stock.Para eso necesitaremos definir una lista que tendrá el 
 * stock de los productos, para este ejercicio deberás colocar por lo menos 2 artículos cuyo 
 * valor no ha sido agregado.Vamos a imprimir esta lista después de su definición.
 */

let articulos=['leche', 'agua', null, null]

console.log(articulos);

/**
 * Ejercicio 5: crear objeto de usuario.
 * ¿Cómo funciona?Para este ejercicio vamos a tomar los datos que hemos usado para el ejercicio 
 * 1 de esta sección, pero ahora, en lugar de ser variables separadas, vamos a colocarlas en un 
 * objeto, ya que este formato será el que utilizaremos para trabajar con los datos de nuestros 
 * usuarios. Al final, igualmente vamos a imprimir este objeto llamado { usuario } en nuestra 
 * consola
 */

let usuario = {
    nombre:'Santiago',
    apellido:'Camacho',
    fechaNacimiento:'22/09/2003',
    direccion:'calle de Cifuentes 17',
    edad:21,
    paisNacimiento:'Ecuador',
    suscripcion:false,
}

console.log('--Carta de Identificación--');
console.log(usuario);
console.log('--Fin de los Datos');
