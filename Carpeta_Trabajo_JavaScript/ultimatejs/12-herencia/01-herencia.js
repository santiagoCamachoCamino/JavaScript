function User(){
    this.name = 'Hola Mundo';
}

function Product(){
    this.name='producto';
}

// save();
// validate();

/**
 * Si quisieramos implementar estos metodos lo haríamos así
 */

// User.prototype.save=function(){
//     console.lof('guardando...');
// }
// Product.prototype.save=function(){
//     console.lof('guardando...');
// }
/**
 * Sin embargo esto es código repetitivo
 * por lo que podemos hacer es establcer una función
 * constructura más arriba que contengan estos dos métodos
 * y los hereden
 */

function Entidad(){};
//Agregamos al prototipo los métodos
Entidad.prototype.save=function(){
    console.lof('guardando...', this.name);
}
Entidad.prototype.validate=function(){
    console.lof('validando...', this.name);
}
/**
 * La forma en la que nosotros podamos agregar herencia son varias:
 */

/**
 * Primera Manera consiste en que nosotros tomemos el protipo de user
 * y le asignemos el prototipo de entidad
 */
//User.prototype = Entidad.prototype;

// User {name: 'Hola Mundo'}
// name: "Hola Mundo"
// [[Prototype]]: Object /*aqui  esta siendo referencia al prototipo padre */
// save: ƒ ()
// validate: ƒ ()
// constructor: ƒ Entidad() /*la funciónm constructora que se uso es de entidad, por lo que no esta bien*/
// [[Prototype]]: Object

//User.prototype.constructor=User;//Ahora con esto le indicamos que su función constructora es User
//console.log(user);
// User {name: 'Hola Mundo'}
// name: "Hola Mundo"
// [[Prototype]]: Object /*aqui  esta siendo referencia al prototipo padre */
// save: ƒ ()
// validate: ƒ ()
// constructor: ƒ User() /*Ahora ya es de User, pero se perdio la FC de Entidad*/
// [[Prototype]]: Object

/**
 * Para poder tener a las dos funciones constructoras en el mismo prototipo hacemos 
 * lo siguiente
 */

User.prototype = Object.create(Entidad.prototype);//Con este mnetodo creamos un objeto literal vácio
//pero el parametro que le pasemos va ser su prototipo
const user = new User();
console.log(user);
// User {name: 'Hola Mundo'}
// name: "Hola Mundo"
// [[Prototype]]: Entidad /*Tiene el prototipo Entidad, pero esta vacio, porque no tiene ningun consttructor */
// [[Prototype]]: Object
// save: ƒ ()
// validate: ƒ ()
// constructor: ƒ Entidad()/*Tiene el constructor de entidad */
// [[Prototype]]: Object
/**
 * Lo que hemos hecho es crear un objeto literal vació, pero con el prototipo de
 * Entidad, es decir que contiene los métodos de save y validate
 */
//Para preservar el constructor de Usuario, aplicamos esto
User.prototype.constructor=User;
console.log(user);
// User {name: 'Hola Mundo'}
// name: "Hola Mundo"
// [[Prototype]]: Entidad
// Constructor: ƒ User()/*Tiene agregado el constructor user, porque es como una clase hija*/
// [[Prototype]]: Object
// save: ƒ ()
// validate: ƒ ()
// constructor: ƒ Entidad()/*Tiene el constructor de entidad porque es como quieren quien se 
// encuentra más arriba*/
// [[Prototype]]: Object

/**
 * Lo que acabamos de realizar es como se realizaba anteriormente
 */


Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);
/**
 * Con esta método le estamos diciendo que tomamos el segundo Argumento, o sea
 * entidad, se lo estamos agregando al prototipo de User
 */