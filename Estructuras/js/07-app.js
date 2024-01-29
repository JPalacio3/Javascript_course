// OPERADOR OR : El operador `||` en JavaScript se utiliza como operador lógico "O"(OR).Se utiliza para combinar dos o más expresiones lógicas y devuelve `true` si al menos una de las expresiones es verdadera.Solo devuelve `false` si todas las expresiones son falsas.

/*
La tabla de verdad del operador `||` es la siguiente:

- `true || true` devuelve`true`.
- `true || false` devuelve`true`.
- `false || true` devuelve`true`.
- `false || false` devuelve`false`.
*/

const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Sí puedes pagar');
} else {
    console.log('Fondos insuficientes');
}
