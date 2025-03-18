
/**
 * Creamos el elemento para poder arrastrar
 */
let id;
function createDraggable(){
    let span = document.createElement('span')
span.id='hola-mundo';
span.innerText='Arrastrable';
span.draggable=true;//Si nosotros no hacemos esto no podemos arrastrar el elemento
/**
 * 
 * Con este evento le estamos diciendo que cuando inicie el drag, que guarde la
 * el id en una variable
 */
span.ondragstart= e =>{
    id = e.target.id;
}
return span;
}


function createDroppableArea(){
    /**
     * Creamos el crop area donde queremos que sea arrastrado 
     */
    let dropArea = document.createElement('div');
    dropArea.className='drop';

    /**
     * 
     * Este evento lo que va hacer es que a lo que nosortos le pasamos el
     * mouse encima este irá cambiar de color
     */
    dropArea.ondragenter = e => {
        e.target.style.background = 'yellow';
    }


    /**
     * Este evento se ejecutara cuando el elemento se salga del area
     * 
     */
    dropArea.ondragleave = e =>{
        e.target.style.background = '';
    }

    /**
     * Ahora lo que haremos es que cuando se suelte el elemento en el area
     * se quede ahí
     */

    /**
     * El siguiente evento lo que evitara el comportamiento por defecto 
     * del drag que es devolverse a su sitio inicial
     * 
     */
    dropArea.ondragover = e =>e.preventDefault();
    /**
     * Este evento, permitira que un elemento arrasytado sea soltado dentro
     * de un área 
     */
    dropArea.ondrop = e =>{
        /**
         * e.target hace referencia al elemento donde se soltó el objeto arrastrado (puede ser dropArea o un elemento dentro de él).
         * document.getElementById(id) obtiene el elemento arrastrado por su id (suponiendo que id se haya definido previamente en ondragstart).
         * appendChild(...) mueve el elemento arrastrado (draggedElement) dentro de dropArea, cambiando su posición en el DOM.
         */
        e.target.appendChild(document.getElementById(id))
    }

    return dropArea;

}



let draggable = createDraggable();//aqui llamamos a la función
let dropArea1 = createDroppableArea();
let dropArea2 = createDroppableArea();
document.body.append(dropArea1);
document.body.append(dropArea2);
document.body.append(draggable);