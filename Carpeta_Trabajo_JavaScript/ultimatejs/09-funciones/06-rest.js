function suma(a, b){
    console.log(arguments)
}

/**
 * Una mejor forma de visualizar los argumentos
 */
const suma2 = (a, b, ...rest) =>{
    console.log(rest);//[3,4]
    //nos devuelve como quiera el resto de argumentos, que no han sido declarados
    console.log(rest);//[3,4,5,6]
    /**
     * Rest debe ser siempre el último parametro y este funciona con las
     * fat arrow function
     */
}
suma2(1,2,3,4,5,6);

/**
 * Una aplicación de esto en la vida real es que si queremos
 * imprimir mensajes
 */
/*
con ...msgs, le queremos decir que queremos recibir todos los mensajes dentro 
de un solo parametro
*/
const logMSg=(desc, ...msgs)=>{ 
    for(let msg of msgs){
        console.log(desc, msg);
    }
}

// logMSg('Servidor:', 'Error 1', 'Petición Aceptada', 'socket activo');

// los mensajes pueden que lleguen como un array

let mensajes = ['Error 1', 'Petición Aceptada', 'socket activo'];
/**
 * Mensajes vienen con el formato de array, por lo que usamos el
 * spreed operator  para descomponer los elementos del array, por lo que tambien
 * podemos agregar mas argumentos despues
 */
logMSg('Cliente móvil:', ...mensajes, 'otro error');
// Cliente móvil: Error 1
// Cliente móvil: Petición Aceptada
// Cliente móvil: socket activo
// Cliente móvil: otro error