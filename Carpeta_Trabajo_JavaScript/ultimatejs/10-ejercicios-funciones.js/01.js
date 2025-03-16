const obj =  {
    nombre: 'Nicolas',
};

function Extender(){ //Función constructura
    this.login = () =>{
        console.log(`${this.nombre} se esta logueando`)
    };

    this.logout = () => {
        console.log(`${this.nombre} esta cerrando sesión`)
    }
};

Extender.call(obj);

console.log(obj);

obj.login();
obj.logout();