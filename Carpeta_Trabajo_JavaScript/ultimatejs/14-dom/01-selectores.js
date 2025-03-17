/**
 * Los selectores en JavaScript nos permiten seleccionar elementos que se encuuentran
 * en el HTML
 * 
 */

//permite obtener elementos con su ID -> HTMLElement
let html=document.getElementById('cuerpo')

console.log(html);//<div id="cuerpo" name="body"> Hola Mundo</div>
//Me muestra toda la etiqueta

console.log(Object.getPrototypeOf(html));//Nos devolvera todas las propiedades
/**
 * innerHTML:le podemos pasar bloques de HTML
 * innerText:si le pasamos bloques de HTML, las interpreta como texto
 */

//obtiene elementos pero por su clase CSS -> HTMLCollection
let elementoRed=document.getElementsByClassName('red');
console.log(elementoRed);//Nos muestra un HTMLCollection con todos los elementos que comparten
//ese selecto
// HTMLCollection(2) [p.red, p.red]
// 0: p.red
// 1: p.red
// length: 2
/**
 * OJO: HTMLCollection se parece a un array, pero no es un array
 */

//accedemos a los elementos mediante el nombre(name) de estos mismos -> NodeList
let elemetosChanchito=document.getElementsByName('chanchito')
console.log(elemetosChanchito);//Nos devuelve un NodeList
// NodeList [p.blue]
// 0: p.blue
// length: 1


//accedemos a los elementos mediante el nombre de la etiqueta -> HTMLCollectiion
let parrafos = document.getElementsByTagName('p');
//Devuelve un HTMLCollection

//Nos devolvera solo un elementos HTML, podemos acceder a su id con '#', ->HTMLElement
//su clase con '.' -> solo un elemento
let el  =document.querySelector('#cuerpo')

//Nos devolver todos los elementos que encuentre, de acuerdo a lo que -> NodeList
//se le pidio buscar
let els = document.querySelectorAll('p')
//devuelve NodeList
/**
 * los query son lentos
 */

/**
 * HTMLCollection:no importa cuantas veces nostros manipulemos el DOM, esta siempre va reflejar
 * los últimos cambios que tiene el DOM
 * NodeList:esta no siempre va sincronizar los cambios que hay en el DOM
 * 
 */

let pLive = document.getElementsByTagName('p');
let pStatic = document.querySelectorAll('p');
console.log(pLive, pStatic);
// HTMLCollection(4) [p, p.red, p.red, p.blue, chanchito: p.blue]
// NodeList(4) [p, p.red, p.red, p.blue]

/**
 * Vamos a creaer un nuevo Elemento
 */

let nuevoP=document.createElement('p');
/**
 * agregar elementos al HTML
 */
document.body.append(nuevoP);

console.log(pLive, pStatic);
// HTMLCollection(5) [p, p.red, p.red, p.blue, p, chanchito: p.blue] 
/*Aquí solo el HTMLCollection nos muestra el nuevo elemento que agregamos */
/*Si queremos verlo en el NodeList tendriamos que hacer otro querySelctor */
// NodeList(4) [p, p.red, p.red, p.blue]