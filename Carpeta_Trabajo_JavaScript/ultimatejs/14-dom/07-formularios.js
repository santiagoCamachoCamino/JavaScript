let validate = data =>{
    let errors = {};//creamos la variable de error vacia
    /**
     * SI no existe el data.name, entonces vamos agregar al
     * objetos de erroes en el campo de name 'campo obligatorio'
     */
    if(!data.name){
        errors.name='campo obligatorio';
    }

    if(!data.lastname){
        errors.lastname='campo obligatorio';
    }

    return errors;
}

let initialValues = {
    name: 'Santi',
    lastname:'',
}

/**
 * Vamos implementar una estrategia para renderizar documentos
 */

let render = ({data, errors}/*Object destructuring */) =>{
    return `
        <form name=formulario>
           <div>
                <label>Nombre:</label>
                <input name="name" value="${data.name}">
                ${errors.name || ''}
           </div>
           <div>
                <label>Apellido:</label>
                <input name="lastname" value="${data.lastname}">
                ${errors.lastname || ''}

           </div>
           <div><button>Enviar</button></div>
        </form>
    `
}

/**
 * Ahora vamos a crear nuestro formulario
 */
let form = document.createElement('form');
form.innerHTML=render({data:initialValues, errors:{}});
document.body.append(form);

/**
 * Ahora lo que nosotros queremos hacer es que cada vez que el 
 * formulario sea enviado, queremos prevenir su comportamiento
 * por defecto, tomar los datos de los campos, validarlos. Y dependiendo
 * si hay errores mostrarlos o enviarlos a nuestra API
 */

form.addEventListener('submit', e =>{//Lo que hacemos es agregar un addEvent
    //listener y luego prevenir este comportamiento
    e.preventDefault();
    //Vamos iterar los elementos del formulario mediante reduce
    let data = Array.from(e.target.elements).reduce((acc, el) => {
        //Si es que el elemeto no tiene un nombre solo retorna el acc
        if(!el.name) return acc;
        //Noaotros estamos iterando elementos HTML, con el atributo 'name'
        acc[el.name] = el.value;
        return acc;
    }, {});
    /**
     * Ahora debemos validar los datos. donde crearemos una función validate
     * a la cual le vamos a pasar todos los datos y esta lo que va hacer es 
     * devolver errores
     */
    const errors = validate(data);

    /**
     * Si vemos que hay mas de un error le estamos indicando que modifique
     * el HTML
     */
    if(Object.keys(errors).length > 0){
        let html  = render({errors, data});
        form.innerHTML = html;
    }

    /**
     * Enviar los datos al servidor
     */

    console.log(errors);

    console.log(data);
    // {name: 'asfdsdf', lastname: 'Camacho', "": ''}
    /**
     * El último elemento es el del boton, por lo que es un elemento vacio,
     * debemos filtrar eso
     */
})