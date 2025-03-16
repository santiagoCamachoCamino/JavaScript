function User(){
    this.name  ="Hola Mundo";
}

User.prototype.login = function(){
    console.log('Iniciando sesion', this.name);
}

let user = new User();

/**
 * Para iterar usamos un For In
 */

for( let prop in user){
    console.log(prop)
    //name
    //login
    /**
     * Nos muestra todas las propiedades que se encuentran en el
     * prototipo, pero esto solo sucede en un nivel
     */

    /**
     * Si queremos imprimir solo las propiedades que se encuentran en el mismo objeto
     * o dentro del prototipo
     */

    if(user.hasOwnProperty(prop)){
        console.log(prop); //name
    }//Manera antigua
    /**
     * Este método se encarga de saber si el objeto contiene el mismo la propiedad
     * que estemos analizando
     */
    /**
     * Si queremos saber solo las propiedades que se encuentran en el prototipo
     * negamos la expresión
     */
    if(!user.hasOwnProperty(prop)){
        console.log(prop);//name
    }
}

/**
 * Si necesitamos solo un array exclusivamente las propiedades de un objeto podemos hacer
 */
console.log(Object.keys(user));
//['name']