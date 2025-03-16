/**
 * Existen algunas situaciones donde es preferible llamar al constructor Padre, para poder reutilar
 * algunas de las propiedades que esta creando
 * 
 */
function Entidad(entidad){
    this.id=Math.random().toString('20');//Genera un String Aleatorio
    this.entidad=entidad;
}

function User(){
    Entidad.call(this, 'user')
    /**
     * Entidad.call hace que la función constructora Entidad, se ejecute
     * en el contexto de User, por lo que solo copia porpiedades y no hereda
     * métodos.
     */
    this.attrs={
        name:'chanchito feliz',
        email: 'chanchito@gmail.com'

    }
}

const u = new User();
console.log(u);