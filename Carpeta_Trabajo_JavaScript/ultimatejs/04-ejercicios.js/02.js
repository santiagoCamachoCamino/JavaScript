/**
 * Nombre: ancho x alto
 * 8k 7680 x 4320
 * 4k 3840 x 2160
 * WQHD 2560 X 1440
 * FHD 1920 X 1080
 * HD 1280 X 720
 */

function nombreResolucion(ancho, alto){
    let nombreResolucion;

    // if(ancho < 1280 || alto < 720){
    //     nombreResolucion= false;
    // } else if((ancho >= 1280 && ancho < 1920) /*&& alto >= 720*/ )  {
    //     nombreResolucion='HD';
    // }else if((ancho >= 1920 && ancho < 2560)  /*&& alto >= 720*/ ){
    //     nombreResolucion='FHD';
    // }else if((ancho >= 2560 && ancho < 3840)  /*&& alto >= 720*/ ){
    //     nombreResolucion="WQHD";
    // }else if((ancho >= 3840 && ancho <7680)  /*&& alto >= 720*/ ){
    //     nombreResolucion='4k'
    // }else {
    //     nombreResolucion='8k'
    // }

    // return nombreResolucion;

    //Corregido
    if( ancho >= 7680 && alto >=4320){
        return '8k';
    }else if( ancho >= 3840 && alto >=2160){
        return '4k;';
    }else if( ancho >= 2560 && alto >=1440){
        return 'WQHD';
    }else if( ancho >= 1920 && alto >=1080){
        return 'FHD';
    }else if( ancho >= 1280 && alto >=720){
        return 'HD';
    }else{
        return false
    }
}

let nombre = nombreResolucion(1920, 10);
console.log(nombre);