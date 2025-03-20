/**
 * Ejercicio 1: comparar precios.
    ¿Cómo funciona?
    Estamos en la búsqueda de varios artículos de forma online, lo que haremos será comparar los precios
    de los artículos entre estas 2 tiendas.
    Vamos a realizar la comparación entre los dos precios, necesitamos saber si es que el precio de la tienda
    "a" es mayor a los de la tienda "b".
    Después de analizar esto, puede ser que algún artículo tenga el mismo precio, por lo que compararemos
    si es el que el precio es igual
 */
let a = 150;
let b = 130;

console.log(a > b);
console.log(a < b);

/**
 * Ejercicio 2: permisos para los usuarios.
    ¿Cómo funciona?
    Vamos a tener varios usuarios a los cuales tenemos que darles o denegarles el acceso para poder
    realizar cambios a nuestros archivos de código.
    Tendremos 3 roles: usuario, moderador, y propietario.
    De estos usuarios, solo vamos a permitirle hacerle modificaciones a los archivos a los usuarios que tiene
    los roles de moderador o propietario.
    Por lo que tendremos que saber si es que un usuario tiene alguno de estos roles. Y regresar el valor de
    true si es que tiene algunos de estos 3 roles. Vamos a evaluar a los 3 tipos de usuarios
 */
let usuario=false;
let moderador=true;
let propietario=true;

let usuarios=[usuario, moderador, propietario];
for(let usr of usuarios){
    if(usr){
        console.log(usr);
    }
};

/**
 * Ejercicio 3: revisar plan.
    ¿Cómo funciona?
    Vamos a emitir una promoción a nuestros usuarios, tenemos usuarios con un plan “free” y otros que
    tienen algún tipo de plan de pago contratado, necesitamos hacer 2 evaluaciones, una si es que los
    usuarios tienes un plan de pago y otra en donde el usuario tiene el plan “free”.
    Tendrás que imprimir en la consola cada una de las evaluaciones.

 */

let planUsuario='free';

console.log(planUsuario === 'free');
console.log(planUsuario === 'pago');

/**
 * Ejercicio 4: elegir un aire acondicionado adecuado.
    ¿Cómo funciona?
    Trabajamos en una tienda de línea blanca, y vamos a agregar en nuestra página una funcionalidad para
    que nuestros usuarios puedan elegir un sistema de aire acondicionado adecuado para el tamaño de su
    habitación.
    Necesitamos determinar el área de una habitación para poder hacer la compra de un aire
    acondicionado.
    Primero necesitaremos obtener el área de esta habitación. Las medidas son para el largo 4 m y para el
    ancho 3.8 m
    Ahora, dependiendo del área de esta habitación, haremos las evaluaciones para 1 tonelada, 1,5
    toneladas y 2 toneladas.
    • Donde para una habitación de 16 m2
    requerirá máximo de 1 tonelada.
    • Para 1.5 toneladas sería adecuado para habitaciones de 15 m2
    a 25 m2
    .
    • Y de entre 25 m2 a 30 m2 corresponderá colocar uno de 2 toneladas.
    Por lo que tendremos que realizar las evaluaciones para que podamos saber cuál de las opciones sería la
    más adecuada.
 */

let largo=4;
let ancho=3.8;

let area=largo*ancho;

let unaTonelada= area < 15;
let unaYMediaTonelada= area >= 15 && area <= 25;
let dosToneladas=area>25 && area <30;

console.log('Area de la habitación'+ area + 'm2' )
console.log('¿Es adecuado un aire de una tonelada?'+ unaTonelada )
console.log('¿Es adecuado un aire de una y media tonelada?'+ unaYMediaTonelada )
console.log('¿Es adecuado un aire de dos toneladas?'+ dosToneladas )


/**
 * Ejercicio 5: mostrar contenido a usuarios.
    ¿Cómo funciona?
    En nuestra app que emitirá eventos, vamos a mostrar 4 tipos de contenido, esto dependerá de que
    paquete tengan contratado nuestros usuarios, estos están divididos por regiones: tendremos: usuarios
    no registrados, con plan free, Nacional, LATAM, EUR, AllAccess (Los usuarios AllAccess tendrán acceso a
    todos los contenidos)
    Entre los eventos que transmitiremos estarán:
    • Contenido libre: aquellos que permitiremos que visualicen todos los usuarios, aunque no tengan
    una cuenta registrada en nuestra app.
    • Contenido free, que lo podrán ver solo los usuarios que si tengan una cuenta registrada.
    • Contenido EUR, que tendrán acceso los usuarios con el paquete EUR.
    • Contenido Nacional, que tendrán acceso los usuarios con el paquete nacional y LATAM.
    • Contenido Latinoamérica: que lo podrán ver los usuarios con el paquete LATAM.
    Aquí tendrás que determinar si es que los siguientes usuarios pueden acceder a este contenido, según
    sus paquetes contratados.
 */

let paqueteUsuario = 'LATAM';

let accesoContenidoLibre = true;

let accesoContenidoFree = paqueteUsuario !== 'no registrado';

let accesoContenidoEUR = paqueteUsuario === 'EUR' || paqueteUsuario === 'AllAcces';

let accesoContenidoNacional = paqueteUsuario === 'Nacional' || 
paqueteUsuario === 'LATAM' || 
paqueteUsuario === 'AllAcces';

let accesoContenidoLatinoamerica = paqueteUsuario === 'LATAM' || 
paqueteUsuario === 'AllAcces';

console.log('Usuario con paquete' + paqueteUsuario);
console.log('¿Puede ver contenido libre?'+accesoContenidoLibre)
console.log('¿Puede ver contenido free?'+accesoContenidoFree)
console.log('¿Puede ver contenido EUR?'+accesoContenidoEUR)
console.log('¿Puede ver contenido Nacional?'+accesoContenidoNacional)
console.log('¿Puede ver contenido LatinoAmerica?'+accesoContenidoLatinoamerica)

/**
 * Ejercicio 6: encendido de molino de café.
    ¿Cómo funciona?
    Tenemos un molino de café y especias, pero este solo encenderá si, lo tenemos conectado a la corriente
    eléctrica y si tiene el contenedor para el café molido en su base. De lo contrario, y por la seguridad de
    nuestros usuarios, este dispositivo no encenderá si no se cumplen las dos condiciones.

 */

let estaConectado=true;

let tieneContenedor=true;

let puedeEncender=estaConectado && tieneContenedor;

console.log('El molino puede encender: '+ puedeEncender)