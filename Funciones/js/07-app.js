// CÓMO SE COMUNICAN LAS FUNCIONES ENTRE SÍ

iniciarApp();

function iniciarApp()
{
    console.log('Iniciando App'); // Ejecución de la primera función
    segundaFuncion(); // Llamada a la segunda función
}

function segundaFuncion()
{
    console.log('Validando sus credenciales ...');
    usuarioAutenticado('Joel'); // Llamada a la función de usuario autenticado
}

function usuarioAutenticado(usuario)
{
    console.log('Autenticando usuario... Espere...')
    console.log('Usuario Auténticado exitosamente');
    console.log(`Hola ${usuario}`);
}
