/// <reference types="Cypress" />
Cypress._.times(5, () => {
  it('testa a página da política de privavidade de forma independente', () => {
    cy.visit('./src/privacy.html')

    cy.contains('Talking About Testing').should('be.visible')
  })
})