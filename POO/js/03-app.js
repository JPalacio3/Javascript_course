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

// Herencia
class Empresa extends Cliente {
    constructor(nombre,saldo,telefono,categoria) {
        super(nombre,saldo); // Herencia del constructor padre
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // Rescribe el método estática con el mismo nombre que está en la clase padre
    static bienvenida() {
        return `Bienvenido al cajero de empresas`;
    }

}

// Instanciar la clase:
const Joel = new Cliente('Joel',5000);
console.log(Joel); // Cliente{nombre: 'Joel', saldo: 5000}

const empresa = new Empresa('JPalacio',100000,3339980089,'Desarrollo de software');
console.log(empresa); // Empresa {nombre: 'JPalacio', saldo: 100000, telefono: 3339980089, categoria: 'Desarrollo de software'}

console.log(Cliente.bienvenida()); // Bienvenido al cajero
console.log(Empresa.bienvenida()); // Bienvenido al cajero de empresas
