class Restaurants{
    /**
     * 
     * Como los getters y setters devuelven algo 
     * tenemos que inicializar una variable, el cual
     * puede ser privada;
     */
    #timetable;
    constructor(name){
        this.name=name;
    }

    get timeTable(){
        return this.#timetable;
    }

    set timeTable(value){
        //realizamos comprobaciones si es uan fecha
        let date = new Date(value);
        let time = date.getTime();
        if(Number.isNaN(time)){//comprueba si no es un numero, entra
            throw new Error('fecha invalida');//Lanzamos un nuevo error
        }
        this.#timetable = date;
    }
}


const r = new Restaurants('BBQ');

/**
 * Aquí lo que se esta realizando es creando un nuevo método a la
 * clase Restaurante, pero si nosotros queremos
 * hacerla en la clase directamente como un get para obtener el dato 
 * o un set para modificarlo, tenemso que hacerlo colocando el
 * mismo nombre del método
 */
r.timeTable='1 march 1978';