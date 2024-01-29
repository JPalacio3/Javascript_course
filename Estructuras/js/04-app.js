// ELSE IF : Se utiliza para realizar varias validaciones, UNA VEZ QUE SE CUMPLA UNA DE ARRIBA HACIA ABAJO, LAS DEMÁS CONDICIONES SE DESCARTAN Y NO SE EVALÚAN

const dinero = 500;
const totalAPagar = 600;
tarjeta = false;

if (dinero >= totalAPagar) {
    console.log(`Tienes suficiente dinero, y te sobran ${dinero - totalAPagar} pesos`);
} else if (tarjeta) {
    console.log('Sí podemos pagar con la tarjeta')
} else {
    console.log(`Fondos insuficientes, necesitas ${totalAPagar - dinero} pesos más`);
}
