let form = document.createElement('form');//creamos el elemento for
form.id='mi-formulario';//le agregamos un Id

let input = document.createElement('input');//creamos un input
input.setAttribute('type', 'text');//le asigbamos un atributo del tipo Text

let btn=document.createElement('button');// creamos un boton
btn.innerText='Enviar';//le agregamos texto
form.append(input);//agregamos al form los elementos
form. append(btn);

document.body.append(form);//agregamos el for al Nodo Padre

/**
 * Comenzamos asignarle eventos
 */

/**
 * El evento onmouseenter, se activa cuando el usuario pase por encima del
 * formulario, lo cual este debe ir acompañado de una función.
 * Todas las funciones que se le asignan, van a recibir un objeto, o sea un
 * evento(e).
 * Este evento se usa para indicarle al usuario lo que esta a punto de seleccionar
 */
form.onmouseenter = e => {
    console.log('entra el mouse', e);
}

/**
 * El evento onmouseleave, se ejecuta cuando el usuario saca al mouse del elemento
 */

form.onmouseleave = e =>{
    console.log('sale el mouse')
}

/**
 * 
 * Este evento se va ejecutar cuando nosotros demos click sobre el input
 */
input.onfocus = e => {
    console.log('input con focus')
}

/**
 * Este evento onblur, se ejecuta cada vez que el usuario da click fuera de un campo de
 * texto que ya haya seleccionado previamente.
 * Este evento se usa si se cambio un dato dentro del formulario, ir a guardar toda la información 
 * dentro del servidor
 */

input.onblur = e =>{
    console.log('perdio el foco')
}


/**
 * Este evento onchnage, se ejecuta cuando cada vez que el valor que se encuentra dentro
 * del formulario cambia
 */

input.onchange = e =>{
    console.log('valor cambia', e.target.value);//con esto podemos acceder al valor
}

/**
 * Eventos que le podemos asignar al Boton
 */

/**
 * Se dispara cada vez que hagamos click sobre el boton
 */
btn.onclick = e =>{
    e.preventDefault();//Lo que hace es impedir que la página web se refresque
    console.log('boton clickeado');
}

/**
 * El método addEventListener permite agregar eventios a elementos del DOM de forma
 * más flexible que los atributos onclick, onblur.
 * Recibe como argumento el nombre del evento y una función
 */

btn.addEventListener('click', e =>{
    e.preventDefault();//Lo que hace es impedir que la página web se refresque
    console.log('boton clickeado');
})