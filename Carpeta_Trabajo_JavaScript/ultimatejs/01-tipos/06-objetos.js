//Personaje de TV
let nombre = "Homero Simpson";
let programa= "Los Simpson";
let edad = 40;

//Aquí es donde entran los objetos
let personaje = {
    //comenzamos a crear las propiedades del objeto
    nombre: "Homero Simpson",//se emplea ':'
    programa: "Los Simpson",
    /*
    lo que se encuentra en la fila, se lo conoce como 'par llave-valor',
    donde la 'llave' sería la parte izquierda en este caso 'nombre' y 
    'valor' sería la parte derecha en este caso 'Homero Simpson'

    En otros lenguajes se los conoce como atributos, como es el caso de
    Java, pero aquí se lo conoce como propiedades

    */
    edad: 40,
};
/*  
'{}' a esto se lo conoce como objeto literal, 
lo que quiere decir que estamos creando un objeto solo con
esta sintaxis
*/

console.log(personaje);

//para acceder a las propiedades de un objeto se emplea el punto
console.log(personaje.nombre);
//otra forma es con el corchete, seguido del nombre en comillas simple
console.log(personaje['programa']);


//Si necesitamos modificar una propiedad
personaje.edad= 41;
personaje['edad']= 41;// se usa más cuando quieres iterar sobre las propiedades

//si queremos eliminar una propiedad
delete personaje.programa;
console.log(personaje);