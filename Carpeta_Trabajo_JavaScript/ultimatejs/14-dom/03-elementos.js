/**
 * Como crear elementos HTML
 */

let el  = document.createElement('p');//creamos el elemento

el.innerText="Elemento Creado";//accedemos para cambiar el texto

document.body.append(el);//lo agregamos al documento html


el.innerText="<ul><li>Hola Mundo</li></ul>";//X
el.innerHTML="<ul><li>Hola Mundo</li></ul>";//O
/* <ul><li>Hola Mundo</li></ul> esto es lo saldra por pantalla*/

/**
 * El innerText no interpreta las etiquetas y las escribe como Texto
 * El innerHTML si interpreta las etiquetas 
 */

/**
 * Podemos acceder a los Estilos
 */

el.style='background-color: red; font-weight: bold'

/**
 * Podemos cambiar el nombre de la clase
 */
el.className='parrafo';

/**
 * Podemos asignarle un id
 */

el.id='mi-parrafo';

/**
 * Para asignarle una propiedad nueva
 */

el.setAttribute('mipropiedad','mi propiedad');

/**
 * Para acceder al valor de la propiedad nueva
 */
el.getAttribute('mipropiedad');

/**
 * Para saber si tiene una propiedad en especifico
 */
el.hasAttribute('mipropiedad');