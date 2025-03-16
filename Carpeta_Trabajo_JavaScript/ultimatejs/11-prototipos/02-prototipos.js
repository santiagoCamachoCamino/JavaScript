/**
 * Función Constructura
 */
function User(){
    this.name = 'Hola mundo'

    /**
     * Método de instancia se definen dentro de la función constructura
     * por lo qeu cada nuevo objeto, obtiene una copia de este, lo que los hace
     * diferente, este tipo de método lo usaremos para cuando el método debe
     * ser unico
     */
    this.logger=function(){
        console.log('loggeando')
    }
}

/**
 * Método de prototipo
 * Estos se definen en el prototipo del objeto, por lo que es compartido entre todas
 * las instancias, este se usa para cuando se quiere ahorrar memoria, optimizar el código
 */
User.prototype.login=function(){
    console.log('iniciando sesión', this.name);
    this.logger();
}

/**
 * Podemos interceptar un metodo dentro de la cadena de prototipos
 */

User.prototype.toString=function(){
    console.log('Usuario',this.nombre )
}

const user1= new User();
const user2= new User();

console.log(User.prototype);
console.log(user1)
