/**
 * Van haber momentos en donde vamos a querer rechazar promesas, ya sea
 * cuando no se cumple una condición.Por lo que para hacerlo, nosotros 
 * debemos retornar una nueva promesa, pero que esta este rechazada. Y 
 * javascript tiene métodos que ya rechazan una promesa
 */

let promesa1 = new Promise((resolve, reject)=>{
    resolve(5);
})

let promesa2 = new Promise((resolve, reject)=>{
    resolve(15);
})


promesa1
.then(valor =>{
   
    if(valor > 10){
        return promesa2;
    }
    //Reject retornara una nueva promeza rechazadda
    // return Promise.reject('Valor menor que 10')
    /**
     * Lo que nosotros estamos haciendo es romper la cadena y vamos a 
     * saltar directamente al catch
     */

    /**
     * Si en caso de que no queremos rechazar la cadena también podemos
     * hacer un resolve
     */

    return Promise.resolve(555);
})
.then(valor2 =>{
    console.log('segunda promesa', valor2)
    //segunda promesa 555
    return valor2;
})
.catch(e => console.log(e))//aqui se mostraria el error
.finally(() => console.log('acá estamos en finally '))