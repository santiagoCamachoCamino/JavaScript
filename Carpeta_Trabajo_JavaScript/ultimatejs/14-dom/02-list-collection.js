/** 
 * Diferencias entre las HTMLCollection y las NodeList
*/
let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection, list);


/**
 * Selecionar/Buscar elementos en una Collection
 */

let item1 = collection.namedItem('chanchito');//accedemos al item con ese nombre
/**
 * Con las HTMLCollection podemos ir a buscar elementos por su propiedad de name
 */
let item2 = collection.item(3);//podemos buscarlo de acuerdo a su indice
/**
 * otra forma de buscar
 */
let item3 = collection[3];
console.log(item1, item2, item3);
/* <p class="blue" name="chanchito">Parrafo 4</p> */

// collection.array.forEach(element => {
//     console.log(element)
// });//Nos dara error, debido a que las collections no tienen metodos para iterar

/**
 * Iterar elementos en un Collection
 */
for(let el of collection){
    console.log(el);
}
//Podemos transformarlo en un Array, para iterarlo
Array.from(collection).forEach(x=>console.log(x));//Nos muestra el objeto
//Aquí envolvemos toda la collection en un Array y usamos el Spreed Operator para pasarle todos los
//valores
[...collection].forEach(x=>console.log(x));//Nos muestra el elemento




/**
 * Acceder a los elementos del NodeList
 * 
 */

let item4=list.item(3);
let item5=list[3];


/**
 * Para iterar una NodeList
 */

list.forEach(x=>console.log(x));


//entries, keys y values, nos devuelve iteradores

let entries = list.entries();//devuelve [índice, nodo] (pares índice-elemento)
/**
 * Entries tiene un Método Next avanza paso a paso en la NodeList.
 * Cuando se acaban los elementos, done se vuelve true.
 */
let keys = list.keys();//devuelve Solo los índices (0, 1, 2...)
let values = list.values();//devuelve Solo los nodos (<p>...</p>)

//tambien podemos transformarlo en un array

[...list].concat();