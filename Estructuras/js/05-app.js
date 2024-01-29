// ESTRUCTURA DE CONTROL SWITCH: Es  empleado en la validació de múltiples condiciones, es más eficiente que else if() para esos casos

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        pagar();
        break;

    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;

    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;

    default:
        console.log('Aún no ha seleccionado ningún de Pago o método de pago No soportado');
        break;
}

function pagar() {
    console.log(`Pagaste con ${metodoPago}`);
}
