/**
 * Formas antiguas de cambiar el contexto de THIS
 */
function saludar(...rest){
    console.log(this, rest);
    //imprime window
}

//Metodo call
//aqui this seria ocupado por el objeto propiedad
saludar.call({propiedad: 'hola mundo'}, 1, 5);


//Metodo apply
//la diferencia aqui es como se pasan los argumentos, 
//lo tenemos que hacer mediante un array
saludar.apply({propiedad:'hola mundo'}, [1,2]);


//Metodo bind: este solo nos permite cambiar el contexto de this
saludar.bind({propiedad:'hola mundo'});// nos devuelve una nueva función
//una forma de guardarla
let nuevoSaludar=saludar.bind({propiedad:'hola mundo'});
nuevoSaludar(1,5);

//otra forma
saludar.bind({propiedad:'hola mundo'})(3,5);

//luego para aplicar esto a la función de saludar
(function saludar(...rest){
    console.log(this, rest);
    //imprime window
}).bind({propiedad:'hola mundo'})(1,2);

const usuario ={
    nombre: 'Nicolas',
    ciudadanias: ['chile', 'colombia', 'New Zealand'],
    mostrarCiudadanias(){
        console.log(this.ciudadanias);
        //Para mostrarlas linea por linea
        this.ciudadanias.forEach( function (ciudadania){
            console.log(this.nombre, ciudadania);
          
        }.bind(this));
        //Otra forma
        let self=this;
        this.ciudadanias.forEach( function (ciudadania){
            console.log(self.nombre, ciudadania);
          
        });
        //otra forma, pero que dependera de los metodos de array
        this.ciudadanias.forEach( function (ciudadania){
            console.log(this.nombre, ciudadania);
          
        }, this);
    }
}
