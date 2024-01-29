
// Declaración de Función ( Function Declaration )

sumar(); // En este paradigma las funciones pueden ser usadas antes de ser definidas

function sumar()
{
    console.log(2 + 2);
}

// Expresión de Función ( Function Expression )
const sumar2 = function ()
{
    console.log(3 + 3);
}
sumar2(); // En este paradigma no se puede invocar la función antes de ser declarada
