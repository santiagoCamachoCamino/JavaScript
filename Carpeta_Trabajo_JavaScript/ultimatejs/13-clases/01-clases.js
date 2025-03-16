/**
 * En JavaScript, no existen las clases como tal, ya que el lenguaje está basado en un sistema 
 * de prototipos. Cuando trabajamos con la sintaxis de clases, los métodos no se copian directamente 
 * a cada instancia del objeto. En cambio, todos los métodos definidos en la clase se agregan al 
 * prototipo de la clase, lo que significa que todas las instancias comparten esos métodos a 
 * través de su prototipo, y no se duplican en cada objeto individual.
 */



/**
 * Aquí lo que tenemos es una función constructora de user y le estamos agregando
 * al prototipo de user la función de login
 */
function User(name){
    this.name = name;
    this.instancia = function(){};
}

User.prototype.login=function(){
    console.log('Hola Mundo')
}

//Ahora como se vería esto con 'Class'

class Usuario{
    //Le indicamos un método constructor
    constructor(name){
        this.name=name;
        this.instancia=function(){}
    }
    /**
     * Nosotros también podemos agregar propiedades, lo cual no van a ser 
     * necesariamente agregadas cuando creemos una instancia
     */
    activo = true;

    /**
     * Si nosotros además de agregar una propiedad, le asignamos una función. JavaScript
     * no va poder determinar si este se refiere a un método o a una propiedad y lo que va hacer
     * es pasarselo directamente a la isntancia de Usuario.
     */
    logout = () =>{//Esto es una propiedad a la cual se le esta asignando una función
        console.log('logout')
    }
    /**
     * Si queremos que se agregue al prototipo lo cambiabemos
     */
    logout(){
        console.log('logout');//ahora ya pertenece al prototipo
    }
    /**
     * Cuando nosotros agregamos el objeto utilizando la siguiente sintaxis,
     * los métodos se van agregar al prototipo de la clase
     */
    login(){
        console.log('Hola Mundo')
    }
}
let u = new Usuario('chanchito feliz');
console.log(u);

/**
 * NOTAS: Siempre debemos usar la palabra reservada de New, las funciones se hizan al inicio
 * de ejecutación, pero esto no sucede con las classes, no se hizan, por lo que si declaramos
 * una variable, sin inizializarla nos va dar error.
 */