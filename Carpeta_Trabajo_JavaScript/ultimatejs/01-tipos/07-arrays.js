//Esto es un array literal
//let animnales = [];
let animales = ['chanchito', 'caballo'];
console.log(animales);
//Los elementos de un array comienzan desde '0'
console.log(animales[0]);//Accedemos al primer elemento del array
animales[2]='dragon';
console.log(animales);

animales[10]='Pez';
console.log(animales);
//Si el índice no existe, se agrega un elemento vacío
console.log(animales[7]); // nos muestra undefined

//que tipo de dato es un array?
console.log(typeof animales); // nos devuelve Object
/*
Entonces como los arrays dentro de JavaScript se comportan como 
objetos, nosotros podemos acceder a las propiedades de este
*/ 
console.log(animales.length)//devuelve la longitud