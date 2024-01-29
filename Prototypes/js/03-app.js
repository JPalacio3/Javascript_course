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

// Instanciarlo con una nueva instancia de ese objeto
const joel = new Cliente('Joel',25000);
console.log(joel.tipoCliente());
console.log(joel.nombreClienteSaldo());
joel.retiraSaldo(1000);
console.log(joel.nombreClienteSaldo());
console.log(joel);
