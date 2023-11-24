// PARÁMETROS POR DEFAULT : Permite asignar un valor predeterminado a un parámetro de una función en caso de que no se proporcione un valor cuando se llama a la función.

function saludar(nombre = 'Invitado',apellido = '')
{
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Joel','Palacio'); // Hola Joel Palacio
saludar('Joel'); // Hola Joel
saludar(); // Hola Invitado
