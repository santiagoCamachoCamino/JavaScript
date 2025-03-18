const url = 'https://jsonplaceholder.typicode.com/todos';
fetch (url,{
    /**
     * Lo que vamos hacer es crear un recurso por lo que usamos POST
     */
    method: 'POST', //le tenemos que psar un string con los valores de PUT,PATCH
    //DELETE, GET. El valor de GET es el que tiene por defecto
    body:JSON.stringify({title:'hola mundo'}),//van a ser los datos que va contener este recurso
    //como trabajamos con JSON tenemos que adaptar esto para formato JSON
    headers:{
        /**
         * Nos va ayudar para poder enviar nuestras credenciales al servidor,
         * y para indicarle al servidor que le estamos enviando datos de
         * tipo JSON
         */
        'Content-Type':'application/json',
        Authorization:'api key'
        
    },
    /**
     * Podría pasar que vmaos a realizar una petición varias veces al 
     * servidor y este va haber momento en donde va cachear una respuesta.
     * Un cache es una pequeña implementación en donde el servidor 
     * en vez de volver recalcular lo que te tiene que enviar almacena 
     * la respuesta en algún archivo, para que sea más fácil y rapido
     * enviar la respuesta.
     * Para anular usamos lo siguiente
     */
    cache:'no-cache'// tenemoos otras opciones default, etc
})
    .then(response =>{
        if(response.ok){
            return response.text();
        }
        return Promise.reject(response.status)
    })
    .then(data => console.log(data))
    .catch(message => console.log({message}))