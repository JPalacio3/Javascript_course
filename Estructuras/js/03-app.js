// OPERADORES MAYOR QUE Y MENOR QUE

const dinero = 1000;
const totalAPagar = 600;

if (dinero >= totalAPagar) {
    console.log(`Tienes suficiente dinero, y te sobran ${dinero - totalAPagar} pesos`);
} else {
    console.log(`Fondos insuficientes, necesitas ${totalAPagar - dinero} pesos más`);
}
