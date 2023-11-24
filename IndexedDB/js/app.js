// INDEXED DB
/*
IndexedDB es una base de datos en el navegador para almacenar datos en aplicaciones web.
Permite estructurar datos en objetos y usar índices para consultas eficientes. Las operaciones se realizan en transacciones,
asegurando la integridad de los datos. Se utilizan eventos y promesas para programación asincrónica. Útil para aplicaciones sin
conexión, almacenamiento de preferencias y datos de usuario. Admite grandes cantidades de datos y opera en el lado del cliente.
Requiere un aprendizaje adicional pero es estándar en navegadores modernos.
*/

let DB;

document.addEventListener( 'DOMContentLoaded', () => {
    // Inicializa la base de datos al cargar la página
    crmDB();

    setTimeout( () => {
        crearCliente();
    }, 3000 );
} );

function crmDB() {
    // Crear la base de datos 'crm' con la versión 1.0
    let crm = window.indexedDB.open( 'crm', 1.0 ); // Recibe nombre de la BD y la versión

    // Manejar errores al crear la base de datos
    crm.onerror = function () {
        console.log( 'Hubo un error al crear la base de datos' );
    }

    // Si la base de datos se crea exitosamente
    crm.onsuccess = function () {
        console.log( 'Base de datos creada correctamente' );
        DB = crm.result;
    }

    // Configuración de la base de datos cuando se actualiza
    crm.onupgradeneeded = function ( e ) {
        const db = e.target.result;
        const objectStore = db.createObjectStore( 'crm', {
            keyPath: 'crm',
            autoIncrement: true,
        } );

        // Definir las columnas en el almacenamiento de objetos
        objectStore.createIndex( 'nombre', 'nombre', { unique: false } );
        objectStore.createIndex( 'email', 'email', { unique: true } );
        objectStore.createIndex( 'telefono', 'telefono', { unique: false } );

        console.log( 'Columnas creadas' );
    }
}

// Transacciones para agregar registros a la base de datos
function crearCliente() {
    // Creación de la transacción
    let transaction = DB.transaction( [ 'crm' ], 'readwrite' );

    // Manejar eventos cuando la transacción se completa
    transaction.oncomplete = function () {
        console.log( 'Transacción completada' );
    }

    // Manejar eventos si hay un error en la transacción
    transaction.onerror = function () {
        console.log( 'Hubo un error en la transacción' );
    }

    const objectStore = transaction.objectStore( 'crm' );

    // Crear un nuevo objeto con el cliente a agregar a la base de datos
    const nuevoCliente = {
        telefono: 3339980089,
        nombre: 'JOEL',
        email: 'JP@gmail.com'
    }

    // Insertar el nuevo registro a la base de datos
    const peticion = objectStore.add( nuevoCliente );
    console.log( peticion );
}
