/**
 * Principio Encapsulamiento
 * 
 * Es el agrupamiento de los datos y métodos 
 */

const user = {
    nombre: 'hola',
    apellido: 'mundo',
    getNombreCompleto(){
        return [this.nombre, this.apellido].join(' ');
    }
};

console.log(user.getNombreCompleto());


/**
 * Principio Abstracción
 * 
 * Aquí en el siguiente ejemplo estamos creando un nuevo usuario al 
 * cual le hemos actualizado la contraseña y luego la hemos guardado, 
 * lo cual si nosotros leemos eso, nos ayuda a saber sin la necesidad
 * de pasarle parametros o comentarios, lo que hace ese pedazo de código
 * eso también es abstracción
 */

const user1 = new User();
user.password = 'Chanchito Feliz';
user.save();


/**
 * Principio de Herencia
 * 
 * En el siguiente ejemplo tenemos varios objetos, donde vemos que cada uno tiene 
 * los mismo atributos, por lo que podemos englobar todos estos mismo atributos en una
 * función constructora y que herenden los atributos y métodos.
 * 
 * Función Constructora( id, name, guardar())
 *      
 *              |
 *              v
 * 
 * user -> id, name, guardar()
 * Restaurante -> id, name, guardar()
 * Motociclista -> id, name, guardar()
 * 
 * OJO: En otros lenguajes de programación como Java, a estas funciones constructoras se las conoce
 * como Classes, pero en JavaScript si tiene una palabra reservada 'Class', estas no se comporta como
 * en los demas lenguajes de programación, si no como un Lenguaje Orientado a Prototipos
 * 
 */


/**
 * Principio de Polimorfismo
 * 
 * En este principio nos permite sobreescribir los metodos, de los cuales se hayan
 * heredado, para especificar en cada caso como queremos que se comporte ese método
 * o que realice ese método.
 */


function validaEntidad(entidad){


    entidad.save()
}

/**
 * User.save(solo guarda)
 * Restaurante.save(tiene que llamar a la base de datos y guardar)
 * Motociclista.save(llama a la api para guardar ahi)
 */