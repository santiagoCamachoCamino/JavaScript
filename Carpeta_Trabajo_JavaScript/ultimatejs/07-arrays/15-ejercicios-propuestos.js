/**
 * Ejercicio 1: Calcular el promedio.
 * ¿Cómo funciona?
 * Promedios, vamos a generar una función, la cual recibirá un array. 
 * Este array será una lista de precios para de la que tendremos que obtener 
 * el precio promedio de todos los precios
 */

let valores=[100,200,300,400,500];
let promedio=0;
for(let valor of valores){
    promedio =+ valor;

}
promedio=promedio/valores.length;

/**
 * Ejercicio 2: Invertir el array.
 * ¿Cómo funciona?
 * En este ejercicio vamos a invertir un array. A pesar de que existe un 
 * método para invertir los array, vamos a generar la lógica para invertir 
 * nuestro array
 */

let num=[1,2,3,4,5];

function revertir(num){
    let numInvertidos=[];
    for(let valor of num){
        numInvertidos.unshift(valor);
    }
    return numInvertidos;
}
console.log(revertir(num));

/**
 * Ejercicio 3: Combinar y ordenar arrays.
 * ¿Cómo funciona?
 * Lo siguiente que haremos es combinar 2 array de números, 
 * para posteriormente ordenarlos
 */

let arr1=[10,5,8];
let arr2=[2,7,3];

function combinar(arr1, arr2){
    let combinado=arr1.concat(arr2);
    return combinado;
}

let nuevo=combinar(arr1, arr2);
nuevo.sort((a, b)=> a -b);
arr1.sort();
console.log(nuevo);

/**
 * Ejercicio 4: Eliminar duplicados.
 * ¿Cómo funciona?
 * En el siguiente ejercicio vamos a eliminar los datos duplicados de un array,
 * tendremos que devolver un nuevo array con los datos correspondientes
 */

let array=[1,2,2,3,4,4,5,6,6];
function eliminarDuplicados(array){
    let arraySinDuplicar=[array[0]];
    for(let indice in array){
        if(!arraySinDuplicar.includes(array[indice])){
            arraySinDuplicar.push(array[indice]);
            console.log(arraySinDuplicar);

        }
    }
    return arraySinDuplicar;

}

console.log(eliminarDuplicados(array));

/**
 * Ejercicio 5: Reorganizar array.
 * ¿Cómo funciona?
 * Dado un array con ceros y otros números, mueve todos los ceros al final 
 * sin cambiar el orden del resto
 */

let datos=[0,1,0,3,12,0,5];

function reorganizar(datos){
   let conCeros= datos.filter(dato => dato === 0);
   let sinCeros= datos.filter(dato => dato !== 0);

   return sinCeros.concat(conCeros);
}

console.log(reorganizar(datos));

/**
 * Ejercicio 6: Aplicación para registrar boletos.
 * ¿Cómo funciona?
 * En nuestra app para vender boletos de eventos, vamos a añadir una nueva 
 * funcionalidad: tendremos una lista con los boletos, nuestros usuarios 
 * llegarán al evento y registraremos su boleto. Lo que tenemos que hacer es 
 * registrar ese boleto en un nuevo listado, y eliminarlo del listado de 
 * boletos.A la par tendremos que agregar el caso de regresar el boleto 
 * registrado a la lista de boletos por si se ha cometido un error al hacer 
 * el registro.Igualmente, si hay un usuario con un boleto duplicado o un 
 * boleto falso, no le permitiremos el acceso.Para esto tendrás que tener 3 
 * métodos, una para registrar un boleto, otro para regresar el boleto y 
 * uno mas para saber el numero de boletos disponibles y los que se han 
 * registrado
 */
function Evento(nombre, duracion, boletosDisponibles){
    let boletosRegistrados=[];
    this.mostrarInformacion= function(){
        console.log(`Nombre: ${nombre}
            Duración: ${duracion} horas
            Boletos Disponibles: ${boletosDisponibles}
            Boletos Registrados: ${boletosRegistrados}`)
    }
    this.registrarBoleto=function(numBoleto){
        if(!boletosDisponibles.includes(numBoleto)){
            console.log('Boleto invalido')
            return
        }

        if(boletosRegistrados.includes(numBoleto)){
            console.log('Boleto ya registrado')
        }else{
            boletosRegistrados.push(numBoleto);
            for(let indice in boletosDisponibles){
                if(boletosDisponibles[indice] === numBoleto){
                    boletosDisponibles.splice(indice, 1);
                }
            }
            console.log('Boleto registrado: '+ numBoleto)
        }
    }
    this.regresarBoleto=function(numBoleto){
        for(let indice in boletosRegistrados){
            if(boletosRegistrados[indice] === numBoleto){
                boletosRegistrados.splice(indice, 1);
                console.log('Boleto Regresado')
            }
        }
        boletosDisponibles.push(numBoleto);

    }
    
}