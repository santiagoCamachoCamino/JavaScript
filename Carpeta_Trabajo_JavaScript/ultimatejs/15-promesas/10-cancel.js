/**
 * Si en caso nosotros queremos abortar una peticón, ya sea porque 
 * esta tardando mucho o ya se cumplio una condicion, podemos
 * hacer lo siguiente
 */
let controller = new AbortController();
let {signal} = controller;// controller tiene una propieda signal, por lo que
//hacemos un object destructuring

async function getTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
        /**
         * Una de las opciones que podemos hacer es pasarle como segundo
         * argumento a fetch '{signal}'
         */
        const response = await fetch(url, {signal});
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('error:', error)
    }
    
}

getTodos();
//para poer abortar usamos lo siguiente
controller.abort();