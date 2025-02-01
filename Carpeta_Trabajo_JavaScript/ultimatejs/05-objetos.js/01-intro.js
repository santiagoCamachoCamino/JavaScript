let email = 'santiago@gmail.com'
let name = 'Santi';
let direccion = {
    calle: 'Queen st',
    numero: 15,
}

let user = {
    email: 'santiago@gmail.com',
    name: 'santiago',
    direccion:{
        calle: 'Queen st',
        numero: 15,
    },
    activo:true,
    recuperarClave: function (){//funcion anonima
        console.log('Recuperando clave...')
    },
}