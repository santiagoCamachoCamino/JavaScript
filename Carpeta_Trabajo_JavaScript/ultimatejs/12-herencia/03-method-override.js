function Entidad(){};

Entidad.prototype.save = function(){//Estamos agregando un nuevo método al prototipo
    console.log('guardando desde entidad...')//Para que lo hereden de Entidad
}

function User() {};
function Product() {};
function Category() {};

/**
 * Que pasaría si este método save es algo que tiene que tener todas estas funciones
 * constructoras, pero en cada una de ellas se debe realizar una cosa diferente
 * podemos realizar lo siguiente
 */
Object.setPrototypeOf(User.prototype, Entidad.prototype);

User.prototype.save=function(){//Sobreescribimos el método save desde User
    console.log('guardando desde user...');
    /**
     * Si usamos este método de save nos mostrara
     * 'guardando desde User...'
     */

}

const u = new User();

/**
 * Si nosotros querriamos acceder el método de save desde entidad
 * tenemos que acceder al prototipo de usuario y luego tenemos que acceder
 * al protitpo del prototipo del usuario
 */

console.log(Object.getPrototypeOf(u));
// Entidad {save: ƒ}
// save: ƒ ()
// constructor: ƒ User()
// [[Prototype]]: Object, nos muestra el prototipo de User
//Por lo que ahora solo debemos acceder al protitpo del objeto
console.log(Object.getPrototypeOf(Object.getPrototypeOf(u)).save());//pero debemos agregar el metodo
//'Guardando desde Entidad'

/**
 * Sin embargo todo esto puede ser muy confuso por lo que podemos simplificarlo
 */

function getProto(u){
    return Object.getPrototypeOf(u);
}

console.log(getProto(getProto(u)).save());
//'Guardando desde Entidad'
