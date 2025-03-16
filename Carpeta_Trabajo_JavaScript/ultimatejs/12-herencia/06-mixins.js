/**
 * Para resolver el siguiente Ejercicio comenzaremos con la función Construcotra de Vuela
 */


let vuela = { //Es un objeto que tiene el método de vuela
    vuela(){
        console.log('volando...')
    }
}
/**
 * Ahora lo que vamos hacer es asignarle el objeto de vuela al prototipo
 * de avión 
 */
//vuela pero no nada, camina ni va al baño
function Avion(){};
//Avion.prototype = vuela;//Aquí ya le estariamos agregando, pero que pasaría si nosotros
//queremos ir agrergandole más métodos, está sería otra forma
// Avion.prototype =  {
//     ...vuela, 
//     ...nada,
// }
//Pero existe otra forma más sencilla
Object.assign(Avion.prototype, vuela );
/**
 * Como primer argumento, el prototipo que va ser modificado y despues
 * todas las propiedades que se les pase despùes van a ser asignadas
 */

//con esto ya tendriamos asignado vuela al protitpo de Avión


let nada={
    nada(){
        console.log('nanando...')
    }
}

let bano={
    bano(){
        console.log('yendo al baño')
    }
}

//nada, va al baño
function Pez(){};

Object.assign(Pez.prototype, nada, bano);//le hemos asigando al prototipo de pez los metodos de nada 
//y baño


let camina={
    camina(){
        console.log('caminando')
    }
}

//camina, nada, va al baño
function Perro(){};

Object.assign(Perro.prototype, nada, bano, camina);



//vuela, nada, camina, va al baño
function Pato(){
    this.name='patito'
};


Object.assign(Pato.prototype, nada, bano, camina, vuela);

/**
 * Y algo que se suele hacer es que tomar la funcionalidad de assign y ponerla
 * dentro de una función que se llame Mixin
 */


function mixin(funConstructora, ...args){
    Object.assign(funConstructora.prototype, ...args);
}

mixin(Pato, nada, bano, camina, vuela);
mixin(Perro, nada, bano, camina);
mixin(Pez, nada, bano);
mixin(Avion, nada);

const p = new Pato();





