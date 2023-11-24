const cliente = {
    nombre: 'Joel',
    saldo: 5000,
}
console.log(cliente); // {nombre: 'Joel', saldo: 5000}

function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const Joel = new Cliente('Joel',10000);
console.log(Joel); // Cliente {nombre: 'Joel', saldo: 10000}
