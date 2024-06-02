Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  cy.get('#firstName').type('Victor')
  cy.get('#lastName').type('Lustoza')
  cy.get('#email').type('victor@exemplo.com')
  cy.get('#open-text-area').type('Teste')
  cy.contains('button', 'Enviar').click()
})
