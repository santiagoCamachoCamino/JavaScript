function suma(a, b){
    //Cuando nosotros referenciamos los valores dentro de las
    //funciones estas se llaman parámetros
    console.log(arguments)//para poder aaceder a todos los valores.
    //No es la manera más recomendada
    return a + b;
}

let resultado = suma(5, 6, 1, 2 , 3);
//Los valores que reciben las funciones cuando las llamamos
//se llaman argumentos
console.log(resultado);
console.log(typeof suma); //function