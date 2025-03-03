const usuario ={
    nombre: 'Nicolas',
    ciudadanias: ['chile', 'colombia', 'New Zealand'],
    mostrarCiudadanias(){
        console.log(this.ciudadanias);
        //Para mostrarlas linea por linea
        this.ciudadanias.forEach( function (ciudadania){
            console.log(ciudadania);
            //chile
            //colombia
            //new zeland
            /**
             * Ahora si nosotros quisiesemos agregar el nombre del usuario
             * a lado de cada ciudadania, lo hariamos con una referencia this
             * pero esto nos daria UNDEFINED, porque ese THIS, hace referencia 
             * al window, ya que se encuentra en una función
             */

            //Para poder usar el this, tenemos que convertirla un 
            //Fat Arrow Function
        })

        this.ciudadanias.forEach(ciudadania => {
            console.log(this.nombre, ciudadania)
            /**
             * Esto funciona, debido a que las Fat arrow function, no
             * tienen contexto de this, por lo que estarian herendando el
             * anterior this
             */
        })
    }
}

usuario.mostrarCiudadanias();