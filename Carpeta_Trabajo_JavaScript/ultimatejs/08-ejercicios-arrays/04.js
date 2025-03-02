const usuarios=[
    {edad:17,nombre:'Nico',plan:'premium'},
    {edad:13,nombre:'Chanchito',plan:'premium'},
    {edad:32,nombre:'Fernanda',plan:'free'},
    {edad:25,nombre:'Felipe',plan:'gold'},
];


function cuantosPremium(usrs){
    // let premiums = usrs.filter(usr => usr.plan !== 'free');
    // let total= premiums.length;
    // return total;

    /**
     * EJERCICIO CORREGIDO
     * podemos utilizar un reduce debido a que permite reducir o acumular todos los elementos de un 
     * array a un solo valor, como una suma
     */

    return usrs.reduce((acumulador, elemento) => 
        elemento.plan !== 'free' ? acumulador + 1: acumulador, 0 );

    /**
     * En este caso el elemento seria el usuario, el acumulador seria cero,
     */
}

// function cuantosMayores(usrs){
//     let mayores = usrs.filter(usr => usr.edad > 17);
//     return mayores.length;
// }

const cuantosMayores = (usr) =>{
    return usr.reduce((acumulador, elemento) => 
    elemento.edad > 17 ? acumulador + 1: acumulador,0);
}



console.log(cuantosMayores(usuarios));
console.log(cuantosPremium(usuarios));