/**
 * Va haber momentos en los que quieras acceder a variables
 * privadas o métodos, esto para las funciones constructoras es fácil
 */

function User(a){
    let name = a;//Aqui al crear una variables la estamos haciendo privada
    this.getName=function(){//Con esto podemos acceder a la variables
        return name;
    }
    /**
     * Si queremos modificarla tenemos que realizar un método
     */
}


/**
 * Para hacer privada propiedades y métodos en las Clases(Class)
 * hacemos lo siguiente
 */

class User{
    //Tenemos que inizializar 
    #name;
    //Ahora que se ha creado o inicializado podemos usarla
    
    constructor(name){
        this.#name=name;
    }

    //Para crear métodos tambien lo inicializamos con '#'
    #logger(){

    }

    getName(){
        this.#logger();
        return this.#name;
    }

}

const u = new User('Chanchito Feliz')