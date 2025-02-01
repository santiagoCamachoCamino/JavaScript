/**
 * Las instrucciones de 'for in' nos sirve para nosotros
 * poder iterar las propiedades de un objeto, y esto nos sirve
 * para conocer dichas propiedades.
 */

let user = {
    id: 1,
    name: 'chanchito feliz',
    age: 25,
};

for(let prop in user){
    console.log(prop);
    //id
    //name
    //age
    /**
     * para acceder a la propiedad
     */

    console.log(prop, user[prop]);
    //id 1
    //name chanchito feliz
    //age 25
}

// se puede iterar tambien con for in
let animales = ['chanchito feliz', 'dragon', 'perrito'];
for(let indice in animales){
    console.log(indice, animales[indice] );
    //0 chanchito feliz
    //1 Dragon
    //2 perrito

}

//sin embargo se usa el for of para iterar
//los elementos