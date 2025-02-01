// while
// do whilw
// for

/*
Estos tres nos permiten calcular como vamos
a iterar
*/

let animales = ['chanchito feliz', 'dragon', 'perrito'];

//Para iterar un listado de elementos usamos un 'for of'
for(let animal of animales){
    console.log(animal);
}

let i=0;
while(i < animales.length) {
    console.log(animales[i]);
    i++;
}