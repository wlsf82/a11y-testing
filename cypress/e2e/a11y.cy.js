describe('Simulado Bank', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  // The below test should fail as the app under test has 6 a11y issues
  it('finds no a11y issues', () => {
    cy.checkA11y()
  })
})
