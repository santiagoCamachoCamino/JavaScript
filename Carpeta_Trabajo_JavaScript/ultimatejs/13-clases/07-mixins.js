/**
 * Aquí el uso de los Mixins es para asignarle más de una sola 
 * funcionaidad al prototipo de la clase User
 */
const Entidad = {
    save(){
        console.log('guardando de entidad');
    }
}
const Actualizar = {
    actualizando(){
        console.log('actualizando de entidad');
    }
}

class User{
    constructor(name){
        this.name = name;
    }
    //Overide
    save(){
        console.log('guardando en Usuario')
    }
}

/**
 * Como lo hemos hecho en clases anteriores con el Objetc Assign, pero la cuestion es que
 * el método de save se agrega directamente al prototipo de User, por lo que no esta
 * funcionando como 'extends', donde save debe estar vinculado al prototipo de Entidad
 * 
 */
// Object.assign(User.setPrototype, Entidad);
// Object.assign(User.prototype, Entidad);
// User {name: 'chanchito'}
// name: "chanchito"
// [[Prototype]]: Object
// save: ƒ save() /*Save se encuentra en el prototipo de User*/
// constructor: class User
// [[Prototype]]: Object
/**
 * Para corregirlo, es evitar asignarle propiedades al prototipo de User, por lo que debemos
 * de hacer es asignarle su nuevo prototipo, o sea Entidad
 */
const nuevoProto=Object.assign({}, Entidad, Actualizar);//Aqui le estamos asignando en un objeto 
//los dos métodos, para despues, agregar este prototipo al prototipo de User
Object.setPrototypeOf(User.prototype, nuevoProto);
// User {name: 'chanchito'}
// name: "chanchito"
// [[Prototype]]: Object /*Ahora el prototipo de Usuario solo tiene su constructor*/
// constructor: class User
// [[Prototype]]: Object/*Aquí hay un objeto que contiene save*/
// save: ƒ save()
// [[Prototype]]: Object

const u = new User('chanchito');
u.save();