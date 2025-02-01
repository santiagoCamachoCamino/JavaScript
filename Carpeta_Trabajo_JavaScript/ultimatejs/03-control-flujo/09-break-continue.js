/**
 * Continue: nos permite salir del loop
 * 
 * Break: nos permite saltarnos una iteración
 */

let i = 0;
while(i < 6){
    i++;
    if(i === 2){
        continue;// cuando lleguemos a esta instruccion
        //todo lo que se encuentra después sera ignorado
        //y volvera de neuvo a la iteracion
        
        //1
        //3
        //4
        //5
        //6
    }

    if(i === 4){
        break;//cuando llega a la instrucción
        //detiene el loop while
    
        //1
        //3
    }

    console.log(i);
}