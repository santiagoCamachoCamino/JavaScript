let numeros = [15, 10, -3];

/**
 * Para ordenar un array usamos el metodo Sort
 * el cual lo ordena de mayor a menor
 */
numeros.sort();
console.log(numeros);//[-3, 10, 15]
/**
 * Reverse nos revierte el orden del arreglo
 */
numeros.reverse();
console.log(numeros);//[15, 10 , -3]

//Estos metodos funcionan si tambien usamos caracteres de la 'a'/'z'

let letras = ['z', 'a', 'd'];

letras.sort();
console.log(letras);//['a', 'd', 'z']

let conMayusculas = ['Z', 'a', 'd'];
conMayusculas.sort();
console.log(conMayusculas);//[Z, a, d]
/**
 * La 'Z' aparece de primero debido a que este caracter
 * tiene asignado un valor, el cual ya esta predeterminado 
 * , por lo que 'a', seria un valor mayor a 'Z' 
 */

//Si queremos ordenarlo alfabeticamente, realizamos lo siguiente
conMayusculas.sort((a, b) =>{
    /**
     * a antes b => -1
     * b antes a => 1
     * si son iguales => 0
     * 
     * En este caso 'a' y 'b', seria los los valores dentro
     * del array que esta comparando.
     */
    //transformamos la cadena ya sea a lower/upper
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();
    console.log('esto es a:',a);
    console.log('esto es b:',b);
    if(alower < blower){
        return -1;
    }
    if(alower > blower){
        return 1;
    }
    return 0;

});

console.log(conMayusculas);//['a', 'd', 'z']

//Este metodo lo podemos implentar a objetos

let usuarios = [
    {edad:15, nombre:'Felipe'},
    {edad:25, nombre:'Ana'},
    {edad:10, nombre:'Feli'},
];

usuarios.sort((a, b) =>{
    // if(a.edad < b.edad){
    //     return -1;
    // }
    // if(a.edad > b.edad){
    //     return 1
    // }
    // return 0;

    //Podemos colocar a los ifs de las siguiente manera si son 
    //solo de una linea
    if(a.edad < b.edad) return -1;
    if(a.edad > b.edad) return 1;
    return 0;
})

console.log(usuarios);
//{edad:10, nombre: 'Feli'}
//{edad:15, nombre: 'Ana'}
//{edad:55, nombre: 'Felipe'}