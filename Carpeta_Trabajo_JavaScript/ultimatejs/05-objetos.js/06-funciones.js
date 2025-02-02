function Usuario(nombre){ //funcion constructura
    this.nombre = nombre;
}

console.log(Usuario.name); //devuelve el nombre de la función
console.log(Usuario.length);//devuelve el número de argumentos 

let U = new Usuario;//podemos tomas una función asignarle a una variable
let user = new U('Nicolas');
//Usuario {nombre: 'Nicolas'}

//Pasar las funciones como argumentos
function of(Fn, arg){//resive una función y aurgumento
    return new Fn(arg); //devuelve la función con el argumento
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);
//Usuario {nombre:chanchito}

//Retornar funciones dentro de otras funciones
function returned(){
    return function() {
        console.log('Hola mundo')
    }
}

let saludo = returned();//se guardo la función retornada en una variable
//convirtiendola en una función

saludo();
//Hola mundo