/*
**Programación Orientada a Objetos (POO):** Paradigma de programación basado en objetos. Utiliza clases para definir la estructura y el comportamiento de objetos. Los objetos son instancias de clases. Se basa en cuatro pilares: encapsulación, herencia, polimorfismo y abstracción. Promueve la reutilización de código y organiza el software en entidades autónomas (objetos) que interactúan para resolver problemas.
*/

/*
Existen dos formas de declarar clases en javascript, class declaration y class expression:

1. class declaration:
class Cliente{}

2. class expression:
const Cliente2 = class{}

*/

class Cliente {
    constructor(nombre,saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Creación de método dentro de la clase
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, Tu saldo es de ${this.saldo}`;
    }

    // Creación de una propiedad estática
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

// Instanciar la clase:
const Joel = new Cliente('Joel',5000);
console.log(Joel);
// Acceder al método dentro de la clase:
console.log(Joel.mostrarInformacion()); // Cliente: Joel, Tu saldo es de 5000
// Acceder a la propiedad estática
console.log(Cliente.bienvenida()); // Bienvenido al cajero

const Cliente2 = class {
    constructor(nombre,saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Creación de método dentro de la clase
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, Tu saldo es de ${this.saldo}`;
    }

    // Creación de una propiedad estática
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

// Instanciar la clase:
const Joel2 = new Cliente2('Joel Palacio',10000);
console.log(Joel2);
console.log(Joel2.mostrarInformacion()); //Cliente: Joel Palacio, Tu saldo es de 10000
console.log(Cliente2.bienvenida()); // Bienvenido al cajero
