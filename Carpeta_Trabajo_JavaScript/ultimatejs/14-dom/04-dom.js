/**
 * Manipulación del DOM
 */

let el  = document.createElement('p');//creamos el elemento

el.innerText="Elemento Creado";//accedemos para cambiar el texto

//El documento de append puede recibir Texto y Nodos, en este caso
//'el' es un Nodo
document.body.append(el);


el.remove();//Quitaremos el elemento del DOM

document.body.prepend(el)//Para colocarlo en un inicio del documento

/**
 * Las referenecias de estos elementos son únicas, es decir no podemos agregar
 * el mismo elemento a varias partes de un HTML, por lo que el último llamado
 * es el que va tomar prioridad
 */

/**
 * Como Reemplazar elementos
 */

let div = document.createElement('div');
div.innerText='soy un texto';

el.replaceWith(div);//le tenemos que indicar con elemento lo queremos reemplazar

//Otra forma de reemplazar elementos, es utilizando un Nodo Padre
document.body.replaceChild(el, div);
/**
 * 1er arg: elemento con el cual vas a reemplazar
 * 2do arg: elemento que quieres reemplzar
 */


/**
 * Podemos hacer un remove desde el nodo Padre
 */
document.body.removeChild(el);

/**
 * Podemoa agregar elementos al Nodo Padre
 */

document.body.appendChild(el);//solo recibe Nodos no texto

/**
 * Si quisieramos agregar un elemento antes o despues
 */

document.body.insertBefore(div, el);
//le estamos indicando que insertamos el DIV, antes de 'el'


document.body.insertAdjacentElement("beforebegin", div);
//En este caso le estamos indicando que inserte el elemento fuera de la etiqueta body
//justo antes del comienzo
document.body.insertAdjacentElement("beforeend", div);
//Lo agrega en la etiqueta body, pero al final
document.body.insertAdjacentElement("afterbegin", div);
//Lo agrega al comienzo de la etiqueta body, pero al comienzo
document.body.insertAdjacentElement("afterend", div);
//Lo agrega fuera y al final


document.body.insertAdjacentHTML();
document.body.insertAdjacentText()