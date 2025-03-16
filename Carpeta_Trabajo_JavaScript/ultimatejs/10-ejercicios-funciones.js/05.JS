function ordenar(texto, fn){
    let arr=texto.split("");
    let arrDividido=arr.reduce((acc,el) =>{
        if(el != ' ' ){
            acc+=el;
        }
        return acc
    });
    arrDividido=arrDividido.split('');
    arrDividido.sort();
    arrDividido=arrDividido.join('');
    fn(arrDividido);
}

ordenar('hola mundo', console.log);
/**
 * Ejercicio Corregido
 */
function ordenar(texto, fn){
    let resultado=texto.split('')
        .filter(letra => letra !== ' ')
        .sort((a, b)=> {
            let alower = a.toLowerCase();
            let blower = b.toLowerCase();
        
            if(alower < blower){
                return -1;
            }
            if(alower > blower){
                return 1;
            }
            return 0;
        })
        .join('');
    fn(resultado);
}