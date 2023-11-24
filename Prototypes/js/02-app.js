
// OBJETO DE CLIENTE
function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const Joel = new Cliente('Joel',1000);

function formatearCliente(cliente) {
    const { nombre,saldo } = cliente;
    return `El ciente ${nombre} tiene un saldo de $${saldo}`;
}
console.log(formatearCliente(Joel)); // El ciente Joel tiene un saldo de $1000

// OBJETO DE EMPRESA
function Empresa(nombre,saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const miEmpresa = new Empresa('JPalacio',100000,'Desarrollo de software');

function formatarEmpresa(empresa) {
    const { nombre,saldo,categoria } = empresa;
    return `El ciente ${nombre} tiene un saldo de $${saldo} y pertenece a la categoria de ${categoria}`;
}
console.log(formatarEmpresa(miEmpresa)); // El ciente JPalacio tiene un saldo de $100000 y pertenece a la categoria de Desarrollo de software
