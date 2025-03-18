/**
 * La función de Fetch nos va devolver una promesa y recibe dos argumentos
 * (url, opciones )
 */
const url='https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
    .then(response =>{
        //este método lo que va recibir es una respuesta
        console.log(response);//Aquí lo que nos mostraría es un prototipo
        //response, el cual tiene métodos que nos permitira obtener
        //los datos de la API

        /**
         * Para capturar un error no podemos lanzar un throw junto el catch,
         * debido cuando trabajamos con fetch este siempre va tener exito, y
         * ejecutara el códgio de arriba hacia abajo.
         * Si queremos capturar ese error en el servidor tenemos que rechazar
         * una promesa y eso lo podemos ver con el método 'ok'
         */
        if(response.ok){
            /**
             * Devolvera falso si la petición no se encuentra entre 200-299
             */
            response.text();
        }
        return Promise.reject(response.status);
        
        //return response.json();
        /**
         * Alguna veces trabajaremos con texto o html
         * return response.text();  
         */
    })
    .then(data => console.log(data))
    .catch(message => console.log({message}))