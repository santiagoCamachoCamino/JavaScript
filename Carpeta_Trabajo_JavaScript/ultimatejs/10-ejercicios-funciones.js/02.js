const obj =  {
    nombre: 'Nicolas',
};

function extender(usuario){ //Factory Function
    // return {
    //     nombre: usuario.nombre,
    //     login: function (){
    //         console.log(usuario.nombre, "Logueando a este usuario")
    //     },
    //     logout: function(){
    //         console.log(usuario.nombre, "Saliendo del servidor" )
    //     }
    // }
    /**
     * Ejercicio Corregido
     */
    const metodos ={
        login(){
            console.log(usuario.nombre, "Logueando a este usuario")
        },
        logout(){
            console.log(usuario.nombre, "Saliendo del servidor" )
        },
    }

    return Object.assign(usuario, metodos);
}


const usuario = extender(obj);

console.log(usuario);

usuario.login();
usuario.logout();