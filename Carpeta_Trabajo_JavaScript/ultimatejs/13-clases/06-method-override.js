class Entidad {
    constructor(id){
        this.id=id;
        this.created_at = new Date();
    }

    save(){
        console.log('save en entidad');
    }
}


class User extends Entidad{
    constructor(name){
        super(12);
        this.name=name;
    }
    /**
     * Solo tenemos que escribir el mismo nombre del método
     */
    save(){
        /**
         * Para poder reutilizar la lógica de este método, también usamo la palabra
         * reservada 'super'
         */
        //si coloco 'super()' estamos ejecutando al constructor
        super.save();
        console.log('save en usuario')
    }
}

const u = new User('Chanchit Feliz');

console.log(u.save());
/**
 * Aquí lo que mostrara por pantalla será 
 * 'save en entidad', por lo que si queremos modificar esto
 * o anular esto, tenemos que hacer un Override
 */