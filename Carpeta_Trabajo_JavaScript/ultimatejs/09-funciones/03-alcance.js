let afuera = 'estoyfuera'

function alcance(){
   
    afuera='estoy dentro';
    function saludo(){}
    var vieja = 'ya no usar';
    let variable = 'hola mundo';
    const constante = 'hola mundo';
}
console.log(saludo);//aqui javaScript nos lanzara error, debido a que todavia
console.log(vieja);//no se ha inicializadp ninguna función o saludo
console.log(variable);
console.log(constante);

console.log(cafuera);//estoy afuera
alcance();
console.log(afuera);//estoy dentro