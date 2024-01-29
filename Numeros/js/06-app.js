// CONVERTIR STRING A NÚMERO

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;


console.log(numero1); // "20"
console.log(Number.parseInt(numero1)); // 20

console.log(numero2); // "20.2"
console.log(Number.parseFloat(numero2)); // 20.2

console.log(numero3); // "Uno"
console.log(Number.parseInt(numero3)); // NaN (Not a Number)

// REVISAR SI UN NÚMERO ES ENTERO O NO
console.log(Number.isInteger(numero4)); // true
console.log(Number.isInteger(numero3)); // false

