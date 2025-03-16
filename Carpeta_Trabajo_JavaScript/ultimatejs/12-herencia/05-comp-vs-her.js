//vuela, nada, camina, va al baño
function Pato(){};

//camina, nada, va al baño
function Perro(){};

//nada, va al baño
function Pez(){};

//vuela pero no nada, camina ni va al baño
function Avion(){};


/**
 * Van haber momentos donde realizar herencias, no va tener ningún sentido.
 * Para el siguiente caso lo que nosotros podriamos hacer es realizar pequeñas funcionalidades 
 * como vuela, nada, camina, ir al baño; después en base a todos estos objetos, nostros podemos
 * ir componiendo para ir creando un objeto más grande y luego ese objeto asigarle al protitpo
 * que corresponda, lo cual a esto se le llama MIXINS
 */

/**
 * OJO: lo recondamble es siempre tener un prototipo dentro de tus funciones, solo un nivel que 
 * hereden
 */