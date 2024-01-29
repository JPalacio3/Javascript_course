class Cliente {

    // Una propiedad se define como privada o protegida con el signo #
    #nombre;

    constructor(nombre,saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    // Creación de método dentro de la clase
    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, Tu saldo es de ${this.saldo}`;
    }

    // Creación de una propiedad estática
    static bienvenida() {
        return `Bienvenido al cajero`;
    }

    // Se pueden crear métodos para acceder o modificar estos valores potegidos con #
    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

// Acceder a los atributos públicos
const joel = new Cliente('Joel',5550);
//console.log(joel.#nombre); //  arroja un error

// Para mostrar la información protegida, se accede mediante otros métodos específicamente diseñados para eso
console.log(joel.mostrarInformacion()); // Cliente: Joel, Tu saldo es de 5550

const alberto = new Cliente();
alberto.setNombre('Alberto');
console.log(alberto.getNombre()); // Alberto
