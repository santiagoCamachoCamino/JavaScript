class Entidad {
    constructor(id){
        this.id=id;
        this.created_at = new Date();
    }

    save(){

    }
}

/**
 * Para heredar las propiedades y métodos usamos
 * la palabra reservada 'extends'
 */
class User extends Entidad{
    constructor(name){
        /**
         * Ahora como ya extendimos la clase, debemos llamar al constructor padre, con la 
         * palabra reservada 'super', seguido de los argumentos
         * que este necesite
         */
        super(12);
        this.name=name;
    }
}

const u = new User('Chanchit Feliz');

// User {id: 12, created_at: Mon Mar 10 2025 07:46:02 GMT+0100 (hora estándar de Europa central), name: 'Chanchit Feliz'}
// created_at: Mon Mar 10 2025 07:46:02 GMT+0100 (hora estándar de Europa central) {}
// id: 12
// name: "Chanchit Feliz"
// [[Prototype]]: Entidad /*Ahora el prototipo de usuario es entidad */
// constructor: class User/*Solo posee su constructor User */
// [[Prototype]]: Object
// constructor: class Entidad
// save: ƒ save()
// [[Prototype]]: Object