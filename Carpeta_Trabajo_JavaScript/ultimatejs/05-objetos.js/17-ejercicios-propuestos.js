/**
 * Ejercicio 1: Usuarios.
    ¿Cómo funciona?
    Escribiremos una función constructora, para hacer nuestros usuarios lo haremos con los siguientes
    datos: nombre, apellido, fecha de nacimiento, dirección, edad, país de nacimiento, y si tiene una
    suscripción activa en la Academia Hola Mundo.
    Y crearemos 3 usuarios, los cuales tendremos que imprimir en la consola.
 */

function Usuarios(nombre, apellido, fechaNacimiento, direccion, edad, paisNacimiento, 
    suscripciónActiva){
    this.nombre=nombre;
    this.apellido=apellido;
    this.fechaNacimiento=fechaNacimiento;
    this.direccion=direccion;
    this.edad=edad;
    this.paisNacimiento=paisNacimiento;
    this.suscripciónActiva=suscripciónActiva;
}

let usuario1=new Usuarios('Chanchito', 'Feliz', '10/04/1992', 'Av. Siempre viva 742', 31, 'Mexico', true);
let usuario2=new Usuarios('Chanchito', 'Feliz', '10/04/1992', 'Av. Siempre viva 742', 31, 'Mexico', true);
let usuario3=new Usuarios('Chanchito', 'Feliz', '10/04/1992', 'Av. Siempre viva 742', 31, 'Mexico', true);

console.log(usuario1);
console.log(usuario2);
console.log(usuario3);


/**
 * Ejercicio 2: .
    ¿Cómo funciona?
    Vamos a copiar la función constructora de nuestro ejercicio anterior, pero solamente vamos a crear un
    usuario. Y vamos primero a verificar si es que nuestro objeto tiene las propiedades: suscripción,
    dirección y altura.
    Si este tiene el valor de la suscripción como true, lo pasaremos a false, y si es false, la modificaremos por
    true.
    Mientras que si existen las propiedades: dirección y altura, vamos a borrar dichas propiedades del
    usuario que creamos.
 */

for(let prop in usuario1){
    console.log(prop);
    if(prop['subscripciónActiva']){
        prop['subscripciónActiva']=false;
    }else{
        prop['subscripciónActiva']=true;
    }

    if(prop === 'direccion' || prop === 'altura'){
        delete usuario1.direccion;
        delete usuario1.altura;
    }
}

/**
 * Ejercicio 3: App para vender boletos de eventos.
 * ¿Cómo funciona?
 * Vamos a generar una función constructora, para nuestra aplicación de eventos, pero en este caso 
 * venderemos boletos para un evento.Este objeto deberá tener las siguientes propiedades: 
 * •Nombre del evento, 
 * •Duración, 
 * •Boletos disponibles.
 * Y tendrá los siguiente métodos: 
 * •Mostrar información : que nos deberá decir, la información del evento.
 * •Comprar boleto: que deberá reducir la cantidad de boletos disponibles según los boletos comprados. 
 * Solo permitiremos 5 boletos por compra. Si ya no hay boletos disponibles, tendremosque 
 * decirle al usuario que ya no hay boletos disponibles.
 * •Cancelar boleto: que deberá agregar la cantidad de boletos disponibles
 */

function Boleto(){
    this.nombreEvento='Taylor Swift';
    this.duracion='3h:00';
    this.boletosDisponibles=50;
    this.mostrarInformacion=function(){
        console.log(`Nombre: ${this.nombreEvento}
                    Duracion: ${this.duracion}
                    Numero de Boletos Disponibles: ${this.boletosDisponibles}`)
    }

    this.comprarBoleto=function(){
        this.boletosDisponibles-=1;
    }

    this.cancelarBoleto=function(){
        this.boletosDisponibles+=1;
    }
}
/**
 * Ejercicio 4: Propiedad privada para app de boletos.
 * ¿Cómo funciona?
 * Para este ejercicio retomaremos lo que hicimos en el anterior ejercicio, 
 * ya que haremos una modificación.Para nuestro objeto, tenemos un problema,
 * y es que la propiedad de boletos disponibles puede ser accedida desde 
 * fuera del objeto. Esto es un error, no deberíamos dejar que la cantidad 
 * sea modificada deesta manera, solo deberíamos permitir que los boletos se 
 * vendan o se devuelvan por medio de nuestros métodos, por lo que vamos a 
 * convertir a esta propiedad como privada
 */
function Boleto2(){
    this.nombreEvento='Taylor Swift';
    this.duracion='3h:00';
    let boletosDisponibles=50;
    this.mostrarInformacion=function(){
        console.log(`Nombre: ${this.nombreEvento}
                    Duracion: ${this.duracion}
                    Numero de Boletos Disponibles: ${boletosDisponibles}`)
    }

    this.comprarBoleto=function(){
        boletosDisponibles-=1;
    }

    this.cancelarBoleto=function(){
        boletosDisponibles+=1;
    }
}

/**
 * Ejercicio 5: Estandarizar biblioteca.
 * ¿Cómo funciona?
 * Estamos actualizando el sistema de una biblioteca, 
 * tendremos un listado de objetos, cada uno de estos será un libro, 
 * lo que tendremos es estandarizar las propiedades que tiene cada uno de 
 * estos objetos. Todos los objetos tendrán que tener las siguientes 
 * propiedades: titulo, autor, año depublicación, categoría, numero de 
 * paginas.Así que deberás recorres este array, verificar que el objeto 
 * tenga dicha propiedad y si no tiene esa propiedad, tendrás que agregarla 
 * añadiendo el valor de null para cada uno de ellos
 */

let libros=[
    {
        titulo: 'libro A',
        autor: 'autor A',
        categoria:'ficción'
    },
    {
        titulo: 'libro b',
        autor: 'autor b',
        anioPublicacion:2021,
        numPaginas:300,
    },
    {
        titulo: 'libro c',
        numPaginas: 150,
        categoria:'hisotria'
    },
]

let estandarizar = (libros)=>{
    for(let propiedad of libros){
        console.log(propiedad);
        if(!('titulo' in propiedad)){
          propiedad.titulo=null;
        };
        if(!('autor' in propiedad)){
            propiedad.autor=null;
        };
        if(!('anioPublicacion' in propiedad)){
            propiedad.anioPublicacion=null;
        };
        if(!('numPaginas' in propiedad)){
            propiedad.numPaginas=null;
        };
        if(!('categoria' in propiedad)){
            propiedad.categoria=null;
        };
    }
}
estandarizar(libros);

/**
 * Ejercicio 6: Juego de cartas.
 * ¿Cómo funciona?
 * Vamos a crear un juego de cartas, cada carta será un objeto, y esta tendrá
 *  diferentes propiedades y métodos.Cada carta deberá tener: 
 * •Nombre, 
 * •Puntos de vida, 
 * •Tipo, 
 * •Uno o máximo 2 ataques, que deberán estar en un array. 
 * Cada ataque deberá tener los datos de puntos, que serán los puntos que 
 * resten al rival con el ataque, además del número de energías necesarias 
 * para realizar el ataque.•Energía, que iniciará en 0
 * •Y tipos a los que la carta es débil.
 * Los métodos que debemos usar son: 
 * •Atacar: este método recibirá, la carta que será el objetivo y el 
 * índice correspondiente de nuestro array de ataques. 
 * •Para este método verificaremos que el ataque exista en nuestro array 
 * de ataques, que nuestra carta tenga equipada energía necesaria para usar 
 * el ataque. Si no la tiene, le diremos a nuestro usuario que no tiene la 
 * suficiente energía. •Si tiene la energía, vamos a usar la carta que es 
 * objetivo y llamaremos al método para recibir el ataque. 
 * •Al final de este método debe restar la energía utilizada para el ataque.
 * •Recibir ataque: que deberá restar los puntos de ataque del ataque a los 
 * puntos de vida.•Si la carta ya no tiene puntos de vida, deberemos indicar
 * que no se puede realizar el ataque y terminar la ejecución de este método.
 * •Si tiene puntos de vida, tendremos que restar los puntos de ataque a los 
 * puntos de vida, y si los puntos de vida son menores o iguales a 0, 
 * tendremos que indicar que la carta ha sido derrotada. 
 * •Añadir energía: que deberá sumar lasunidadesde energía que recibamos como 
 * parámetro
 */
let carta1={
    nombre:'dragón de fuego',
    pv:100,
    tipo:'fuego',
    ataques:[
        {
        nombre:'llamarada',
        pvDaño:30,
        energia:2,
        },
        {
        nombre:'golpe igneo',
        pvDaño:50,
        energia:3,
        },
    ],
    debilidades:'agua',
    energia:0,
    atacar: function(carta, indice){
        if(indice >= this.ataques.length){
            console.log(`${this.nombre} no tiene este ataque`);
            return;
        }
        let ataque=this.ataques[indice];
        if(this.energia >= ataque.energia){
            carta.recibirAtaque(ataque.pvDaño);
        }else{
            console.log('No tiene suficiente energía')
        }
    },
    recibirAtaque:function(pvDaño){
        if(this.pv <=0){
            return console.log('esta carta ha sido derrotada, no tiene puntos de vida')
        }
        this.pv -= pvDaño;
        console.log(`${this.nombre} ha recibido ${pvDaño} de daño. 
            vida restate: ${this.pv}`)
        if(this.pv <=0){
            console.log('Ha sido derrotada')
        }
    },
    agregarEnergia: function(numEnergía){
        this.energia+=numEnergía;
    }
}
let carta2={
    nombre:'serpiente acuática',
    pv:120,
    tipo:'agua',
    ataques:[
        {
        nombre:'tsunami',
        pvDaño:40,
        energia:2,
        },
    ],
    debilidades:'electrico',
    energia:0,
    atacar: function(carta, indice){
        if(indice >= this.ataques.length){
            console.log(`${this.nombre} no tiene este ataque`);
            return;
        }
        let ataque=this.ataques[indice];
        if(this.energia >= ataque.energia){
            carta.recibirAtaque(ataque.pvDaño);
        }else{
            console.log('No tiene suficiente energía')
        }
    },
    recibirAtaque:function(pvDaño){
        if(this.pv <=0){
            return console.log('esta carta ha sido derrotada, no tiene puntos de vida')
        }
        this.pv -= pvDaño;
        console.log(`${this.nombre} ha recibido ${pvDaño} de daño. 
            vida restate: ${this.pv}`)
        if(this.pv <=0){
            console.log('Ha sido derrotada')
        }
    },
    agregarEnergia: function(numEnergía){
        this.energia+=numEnergía;
    }
}



