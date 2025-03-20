/**
 * Ejercicio 1: Tamaño máximo de carga.
    ¿Cómo funciona?
    Nuestro sistema solo aceptará aquellas imágenes que pesen menos de 5 MB
    Tenemos que determinar si es que todas las imágenes que ha pasado el usuario son menores o iguales al
    tamaño máximo permitido por nuestro servidor. Si esto no es así, le notificaremos al usuario que el
    archivo ha excedido el tamaño máximo.
 */

let tamanoArchivo=6;
let maximo=5;
if(tamanoArchivo <= 5){
    console.log('El archivo cumple con el tamaño permitido')
}else{
    console.log('El archivo ha excedido el tamaño máximo permitido')
}

/**
 * ¿Cómo funciona?
    Trabajaremos en el registro de nuestros usuarios en nuestra aplicación, lo que necesitaremos será no
    permitir que creen su cuenta con una contraseña insegura, por lo que, si es que la contraseña tiene
    menos de 12 caracteres, no les permitiremos crear su cuenta. 
 */

let password='holamundo';
let caracteresMinimos=12;

if(password.length <=caracteresMinimos){
    console.log('Contraseña no es segura, no tiene 12 caracteres');
}else{
    console.log('contraseña segura');
}

/**
 * Ejercicio 3: pava eléctrica.
    ¿Cómo funciona?
    Tendrás que generar el sistema de control de una pava eléctrica / hervidor eléctrico de agua / tetera
    eléctrica.
    Este ejercicio tendrá varios pasos con varias evaluaciones
    Este código va a determinar si es que el agua está hirviendo. La temperatura en la que la pava se
    apagará, será cuando llegue a los 100 grados. Además, esta no encenderá si es que no tiene agua.
    Primero, verificaremos que la pava tenga agua. Si la pava no tiene agua, imprimimos un mensaje en el
    que no tiene agua, y no puede encender.
    Pero si tiene agua, vamos a cambiar el estado de encendido a true, e imprimiremos un mensaje de que
    hemos encendido la pava.
    Lo siguiente es que mediante un loop, imprimiremos el valor de la temperatura, y vamos a sumar en
    cada iteración 25 a la temperatura.
    Cuando se haya alcanzado la temperatura máxima, vamos a cambiar el estado de encendido a false.
    E imprimiremos que la pava tiene agua caliente y el valor de la temperatura.
 */

let tieneAgua=true;
let estaEncendida=false;
let temperatura=0;
if(tieneAgua){
    estaEncendida=true;
    console.log('La pava está encendida');
    while(temperatura <= 100){
        console.log('Calentando agua... la temperatura es de:'+temperatura + ' grados');
        temperatura+=25;
    }
    console.log('La temperatura de la pava ha llegado al máximo, la pava se apagará.')
    console.log('Ahora tienes agua caliente a 100 grados.')
}else{
    console.log('La pava no tiene agua, no puede encender')
}

/**
 * Ejercicio 4: Batería portátil.
    ¿Cómo funciona?
    Tenemos una batería portátil, la cual podrá cargar múltiples dispositivos. Gracias a los algoritmos
    programados en esa batería, esta puede proveer de diferentes potencias. Por ejemplo, si conectamos un
    teléfono/móvil, proporcionará 25 watts, si conectamos una MacBook, 65 watts, mientras que si
    conectamos una lámpara USB solo proporcionará 5 watts, mientras que si conectamos algún otro
    dispositivo, no se sumará energía, por lo cual será 0.
    Debes generar el código y, dependiendo de qué dispositivo, es que vamos a imprimir en la consola qué
    potencia es la que devolverá esta batería.

 */

let dispositivo='celular';
let potencia;

switch (dispositivo){
    case 'celular':
        potencia=25;
        break;
    case 'MackBook':
        potencia=65;
        break;
    case 'USB':
            potencia=5;
            break;
    default:
        potencia=0;     
}

console.log('Provee una potencia: '+potencia+' watts');

/**
 * Ejercicio 5: Molino de café.
    ¿Cómo funciona?
    En los molinos de café en grano normalmente podemos hacer una selección de cuantas tasas
    necesitaremos, para esto vamos primero a verificar que nuestro usuario tenga el contenedor de café
    molido, y enseguida vamos a verificar cuál ha sido la selección del usuario y dependiendo a eso vamos a
    determinar cuando tiempo tiene que funcionar el molino para entregarle al usuario la cantidad
    correcta
 */

let tieneContenedor=true;
let numTazas=5;
let tiempo=30;

if(!tieneContenedor){
    console.log('No se puede encender, no tiene el contenedor')
}else if(numTazas <=0){
    console.log('No se ha seleccionado ninguna taza');
}else {
    console.log('Molino Listo.')

    let tiempoTotal= numTazas * tiempo;
    console.log('Tiempo estimado'+ tiempoTotal + 'segundos')
}

/**
 * Ejercicio 6: Prestamos.
    ¿Cómo funciona?
    Trabajamos en un banco que ofrece préstamos a muchos clientes, algunos de estos tienen una cuenta
    con nosotros.
    Vamos a tener un listado de usuarios de los cuales tendremos que determinar la tasa de interés que les
    ofreceremos, basado en su puntaje.
    Primero tendremos que determinar si es que el usuario tiene una cuenta en nuestro banco, después
    deberemos determinar la tasa de interés dependiendo de su puntaje de crédito.
    Considerando que a nuestros clientes les podremos ofrecer un descuento del 10% en su préstamo,
    siempre y cuando la tasa no sea menor a 15 %.
    Tendremos que determinar, si podemos o no darles un préstamo, y de cuánto será su tasa de interés si es
    que está aprobado.
 */

let tieneCuneta=true;
let puntaje=500;
let tasaInteres

if(puntaje >= 750){
    tasaInteres=10;
}else if(puntaje <= 749 || puntaje >=700){
    tasaInteres=15;
}else{
   console.log('No podemos ofrecer el credito');
   tasaInteres=20;
}

if(tasaInteres !== null && tieneCuneta && tasaInteres >= 15){
    tasaInteres *= 0.9;
}

if(tasaInteres !== null){
    console.log('El prestamo ha sido aprobado');
    console.log('Tasa de interes final '+tasaInteres)
}
   
/**
 * Ejercicio 7: Alimentador mascota .
    ¿Cómo funciona?
    Estamos automatizando un alimentador automático para perros y gatos, para esto deberemos de
    determinar la cantidad de comida que liberará el alimentador dependiendo del peso de nuestro peludo
    o nuestro michi.
 */

let tipoMascota='perro';
let peso = 10;
let cantidadComida;

switch (tipoMascota){
    case 'perro':
        if(peso <5){
            cantidadComida=100;
        }else if(peso>=5 && peso<=9.99 ){
            cantidadComida=200;
        }else if(peso>=10 && peso<=19.99 ){
            cantidadComida=300;
        }else if(peso>=20){
            cantidadComida=44;
        }
        break;
    case 'gato':
        if(peso <3){
            cantidadComida=50;
        }else if(peso>=3 && peso<=5.99 ){
            cantidadComida=100;
        }else if(peso>=6){
            cantidadComida=150;
        }
        break;
}

if(cantidadComida !== null){
    console.log(
        'El alimentador liberar ' + cantidadComida + ' granmos'
    )
}