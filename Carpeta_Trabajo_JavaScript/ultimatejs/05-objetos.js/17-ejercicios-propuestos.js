/**
 * Ejercicio 1: Usuarios.
    ¿Cómo funciona?
    Escribiremos una función constructora, para hacer nuestros usuarios lo haremos con los siguientes
    datos: nombre, apellido, fecha de nacimiento, dirección, edad, país de nacimiento, y si tiene una
    suscripción activa en la Academia Hola Mundo.
    Y crearemos 3 usuarios, los cuales tendremos que imprimir en la consola.
 */

function Usuarios(nombre, apellido, fechaNacimiento, direccion, edad, paisNacimiento, 
    suscripciónActiva){
    this.nombre=nombre;
    this.apellido=apellido;
    this.fechaNacimiento=fechaNacimiento;
    this.direccion=direccion;
    this.edad=edad;
    this.paisNacimiento=paisNacimiento;
    this.suscripciónActiva=suscripciónActiva;
}

let usuario1=new Usuarios('Chanchito', 'Feliz', '10/04/1992', 'Av. Siempre viva 742', 31, 'Mexico', true);
let usuario2=new Usuarios('Chanchito', 'Feliz', '10/04/1992', 'Av. Siempre viva 742', 31, 'Mexico', true);
let usuario3=new Usuarios('Chanchito', 'Feliz', '10/04/1992', 'Av. Siempre viva 742', 31, 'Mexico', true);

console.log(usuario1);
console.log(usuario2);
console.log(usuario3);


/**
 * Ejercicio 2: .
    ¿Cómo funciona?
    Vamos a copiar la función constructora de nuestro ejercicio anterior, pero solamente vamos a crear un
    usuario. Y vamos primero a verificar si es que nuestro objeto tiene las propiedades: suscripción,
    dirección y altura.
    Si este tiene el valor de la suscripción como true, lo pasaremos a false, y si es false, la modificaremos por
    true.
    Mientras que si existen las propiedades: dirección y altura, vamos a borrar dichas propiedades del
    usuario que creamos.
 */

for(let prop in usuario1){
    if(prop === 'suscripcionActiva' || prop === 'direccion' || prop === 'altura'){
        usuario1[suscripciónActiva]=
    }
}

