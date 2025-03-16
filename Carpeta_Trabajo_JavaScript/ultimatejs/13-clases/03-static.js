/**
 * Un método estático es un método que pertence a la clase, 
 * pero que no pertenece a la instancia del objeto, por lo que en
 * JavaScript no podras llamarlas desde la instancia, dara error
 */


class Restaurants{
    /**
     * 
     * Podemos realizar propiedades estáticas
     */
    static cantidad = 12;
    constructor(name){
        this.name=name;
    }

    getTimeTable(){//Obtener Horario
        console.log('Horario Restaurante')
    }

    /**
     * 
     * Para hacer métodos estáticos ponemos
     * al inicio la palabra reservada de 'Static'
     */
    static getRestaurant(id){
        return new Restaurants('BBQS')
    }
}


