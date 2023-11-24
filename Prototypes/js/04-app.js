// OBJETO DE CLIENTE
function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Regular';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: $${this.saldo}, Tipo de Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira;
}

function Persona(nombre,saldo,telefono) {
    Cliente.call(this,nombre,saldo); // Herencia de Cliente de las propiedades nombre y saldo
    this.telefono = telefono;
}

// Heredar el prototype completo de Cliente hacia Persona
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

// Instaciar el objeto Persona
const joel = new Persona('Joel',8000,4564542545)
console.log(joel);
console.log(joel.nombreClienteSaldo())

// También es posible crear prototipos exclusivos para la clase que hereda
Persona.prototype.mostrarTelefono = function () {
    return `El teléfono de ${this.nombre} es ${this.telefono}`;
}
console.log(joel.mostrarTelefono())
