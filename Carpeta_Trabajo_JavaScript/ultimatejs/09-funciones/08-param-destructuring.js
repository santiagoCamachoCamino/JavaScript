/**
 * 
 * Nosotros podemos obtener propiedades en especifico de un objeto
 */

function webServer(config){
    // const url = config.url;

    /**
     * Otra forma de hacerlo es:
     * sacando la propiedad de un objeto y guardandola en una
     * variable del mismo nombre
     */

    const {url} = config;
    return url;

}

/**
 * Podemos ir un paso mas allá ahora lo que estamos haciendo acá
 * es sacando la propiedad y aplicarlo como parametro en la función
 */

function webServer2({url}){
    // const {url} = config;
    return url;
}

/**
 * Podemos hacer tambien un destructuring de propiedades que contengan
 * objetos
 */

const config = {
    url: 'holamundo',
    dirrecion:{
        calle:'holamundo',
        numero:80,
    }
}
/**
 * 
 * Para acceder a la propiedad que se encuentra en un objeto dentro
 * de otro objeto, hacemos lo siguiente 
 */
function webServer3({url, dirrecion: { calle}}){
    // const {url} = config;
    //Ahora podemoa acceder a la propiedad de dirección, calle
    //Este metodo puede resultar un poco confuso, si se tiene muchas 
    //propiedades y objetos
    console.log(calle);//'holamundo'
    return url;
}
/**
 * Tambien podemos aplicar un ...rest
 *  
 */
function webServer3_1({url, ...rest}){
    console.log(rest);
    //{direccion}
}
/**
 * Podemos hacerlo alrevez
 */
function webServer3_2(config){
    const {url, ...rest}=config;
    console.log(rest);
    //{direccion}
}
/**
 * Podemos hacer lo anterior con un array, pero en este caso seria un array
 * destructuring, donde sacamos lso valores del array y los guardaos en
 * variables
 */

const config2=[
    'holamundo',
    145,
    80,
]
function webServer4(config2){
    const [url, bucket, port] = config2;
    return bucket;//145

}
/**
 * 
 * Lo mismo podemos hacer en la misma linea de los
 * parametros
 */
function webServer5([url, bucket, port]){
    // const [url, bucket, port] = config2;
    return bucket;//145

}
/**
 * 
 * Podemos agrupar todos los demas elementos con
 * ...rest
 */
function webServer6([url, ...rest]){
    // const [url, bucket, port] = config2;
    return rest;//[145 ,80]

}
console.log(webServer6(config2))