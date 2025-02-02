/**
 * Array Reduce
 * Usamos este metodo para reducir el contenido de un array
 * -Recibe como parametro una función y inicialador del acumulador,
 *  la funcion contiene el acumulador y el elemento
 */

const numeros = [1, 2, 3, 4];

const suma = numeros.reduce((acumulador, elemento)=>{
    return acumulador+elemento;
    /**
     * con esta función lo que estamos haciendo es sumar cada elemento
     * con el resultado de la suma anterior
     */
}, 0);

console.log(suma);//10

/**
 * Usos del reduce
 */

//Para Arrays anidados
const anidado = [[1,2], 3, [4, 5]];

const plano = anidado
    .reduce((acumulador, elemento)=>acumulador.concat(elemento), []);
    /**
     * aqui le estamos aplicando el concat al acumulador, para que los
     * combine y al final el acumulador es un array vacio
     */

console.log(plano);
//[1,2,3,4,5]


//para arrays con miles de miles de elementos y queremos buscar algo

const usuarios=[
    {edad:17, nombre:'Nico'},
    {edad:13, nombre:'Ana'},
    {edad:25, nombre:'María'},
    {edad:32, nombre:'Ñusta'},
];

const indexado = usuarios.reduce((acumulador, elemento)=>({
    //aca retorna en nuevo objeto, que va ser
    ...acumulador,//la copia de acumulador
    [elemento.nombre]:elemento,//agregamos una nueva propiedad
}), {})//le tenemos que pasar al acumulador un objeto vacio

//Ahora ya podemos acceder a un usuario, lo hacemos mediante indexado

console.log(indexado);
//Nico: {edad:17, nombre:'Nico'}
//Ana: {edad:13, nombre:'Ana'}
//Maria: {edad:25, nombre:'Maria'}
//Ñusta: {edad:32, nombre:'Ñusta'}