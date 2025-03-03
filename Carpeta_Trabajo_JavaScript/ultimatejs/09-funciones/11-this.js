//Dentro de un objeto: thishace refeencia al objeto

//Si se us anew hace referencia al objeto que será creado

const user ={
    name:'Nicolas',
    login(){
        console.log(this);
    }
}

user.logout=function logout(){
    console.log(this);
}

user.login()//hace referencia al objeto en general

user.logout();
// {name: 'Nicolas', login: ƒ, logout: ƒ}
// login: ƒ login()
// logout: ƒ logout()
// name: "Nicolas"

//En una funcion: this hace referencia al objeto window, global
function log(){
    console.log(this);
}

log();//Window {window: Window, self: Window, document: document, name: '', location: Location, …}


//Si se usa new hace referencia al objeto que será creado

function Log(mensaje){ //funcion constructura
    this.mensaje = mensaje;
    console.log(this)
}
/**
 * Cuando nosotros usamos la palabra reservada de new
 * ocurren las siguientes cosas:
 * -se crea un objeto literal
 * -se vincula este objeto a this
 * -se vincula el prototipo
 * -si no retorna nada, entonces retorna this
 */

const l = new Log('Hola mundo');
// Log {mensaje: 'Hola mundo'}
// mensaje: "Hola mundo"