// let user = {
//     id:1,
//     email: 'santiago@gmail.com',
//     name: 'santiago',
//     activo:true,
//     recuperarClave: function (){//funcion anonima
//         console.log('Recuperando clave...')
//     },
// };

function crearUsuario(name, email){
    return {
        email,// si encaso de que las variables se llaman iguales, a su llave
        name,//podemos dejar solo el nombre de la variable
        activo:true,
        recuperarClave: function (){//funcion anonima
            console.log('Recuperando clave...')
        },
    }
}

let user1 = crearUsuario('Nicolas', 'nico@gmail.com')
let user2 = crearUsuario('Santi', 'santi@gmail.com')
console.log(user1);
console.log(user2);


/**
 * Código repetitivo
 */
// let user1 = {
//     id:2,
//     email: 'esteban@gmail.com',
//     name: 'Esteban',
//     activo:false,
//     recuperarClave: function (){//funcion anonima
//         console.log('Recuperando clave...')
//     },
// };