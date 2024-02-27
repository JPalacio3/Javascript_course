
// la siguiente línea sirve para configurar mejor el funcionamiento del autocompletado
/// <reference types="cypress" />

describe( 'Carga la página principal', () => {
    it( 'Carga la página principal', () => {

        // Hay que indicarle a cypress que primero debe visitar una url:
        cy.visit( 'http://127.0.0.1:5500/index.html' );

        // Prueba para verificar que el sitio sí tenga el tipo de título y texto específico:
        cy.contains( '[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria' );

        // Prueba para existir que la página sí contiene el título en su cuerpo:
        cy.get( '[data-cy="titulo-proyecto"]' ).should( 'exist' );

        // Verificar que exista el elemento y contenga un texto:
        cy.get( '[data-cy="titulo-proyecto"]' )
            .invoke( 'text' )
            .should( 'equal', 'Administrador de Pacientes de Veterinaria' );

        // Verificar el texto de las citas
        cy.get( '[data-cy="citas-heading"]' )
            .invoke( 'text' )
            .should( 'equal', 'No hay Citas, comienza creando una' );

        // Verifica que el texto no sea otro:
        cy.get( '[data-cy="citas-heading"]' )
            .invoke( 'text' )
            .should( 'not.equal', 'Administra tus citas' );
    } );
} );
