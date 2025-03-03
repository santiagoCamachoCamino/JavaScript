const usuarios=[
    {edad:17,nombre:'Nico',plan:'premium'},
    {edad:13,nombre:'Chanchito',plan:'free'},
    {edad:25,nombre:'Felipe',plan:'gold'},
    {edad:32,nombre:'Fernanda',plan:'free'},
]
function groupBy(arr, prop){


    // return arr.reduce((accu, el)=>{
    //     let llave=el.prop;
    //     accu[llave]=accu[llave]?accu[llave]:[];
    //     accu[llave].push(el.prop);
    // }, {});

    /**
     * Ejercicio Corregido
     */
    return arr.reduce((acc, el) =>{
        let valor = el[prop];
        acc[valor]=acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    },{});
}

const grouped = groupBy(usuarios, 'plan');
console.log({grouped})