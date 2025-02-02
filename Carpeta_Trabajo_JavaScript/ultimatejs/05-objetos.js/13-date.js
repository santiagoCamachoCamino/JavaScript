/**
 * Objeto Date
 */
const ahora = new Date();//Nos indica la fecha actual de tu ordenador
//console.log(ahora);
/**
 * Date nos permite pasarle como argumento un String con el formato de
 * fecha estadounidense ( Mes Día Año)
 */
const fecha = new Date('December 11 1986 14:15 GMT-0300');
console.log(fecha);
//Thu Dec 11 1986 18:15:00 GMT+0100 (hora estándar de Europa central)

//Date con otros argumentos
const fecha2 = new Date(1986, 11, 25, 14, 15);//Año, Mes, dia, hora, minutos
console.log(fecha2);
//Thu Dec 25 1986 14:15:00 GMT+0100 (hora estándar de Europa central)

const fecha3 = new Date(1986, 11, 25, 14+15, 15); //para cambiar la zona horaria
/**
 * Le sumamos el GMT de la zona de donde yo me encuentro y sumarle el GMT del 
 * país que queremos cambiarle
 * */ 
console.log(fecha3);
//Fri Dec 26 1986 05:15:00 GMT+0100 (hora estándar de Europa central)

/**
 * Como obtebner las fechas en un formato internacional
 */

console.log('DateString',fecha3.toDateString()); //DateString Fri Dec 26 1986
console.log('ISOString',fecha3.toISOString()); //ISOString 1986-12-26T04:15:00.000Z
//El formato de ISO es el que se usa para enviarlas al servidor
console.log('TimeString',fecha3.toTimeString());//TimeString 05:15:00 GMT+0100 (hora estándar de Europa central)

/**
 * Para obtener el día, mes, año
 * usamos los metodo get
 * fecha3.get...
 * 
 * Para cambiar las fechas
 * fecha3.set..
 */

fecha3.setFullYear(1978);
console.log(fecha3);



