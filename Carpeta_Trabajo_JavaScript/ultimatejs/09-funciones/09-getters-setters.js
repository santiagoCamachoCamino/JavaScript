/**
 * Podemos crear funciones dentro de un objeto, las cuales pasan
 * a ser llamadas metodos
 */

const usuario = {
    nombre:'chanchito',
    apellido:'feliz',
    //getter
    get nombreCompleto(){
        return `${usuario.nombre} ${usuario.apellido}`;
    },
    //setter tiene que ser el mismo nombre
    set nombreCompleto(valor){
        //aqui podemos hacer un destructuring
        const [nombre, apellido] = valor.split(' ');//Como nos devuelve un string
        //lo convertimos a un array con split
        this.nombre=nombre;
        this.apellido=apellido;
    }
};

usuario.nombreCompleto = 'Hola mundo';
console.log(usuario.nombreCompleto)