describe('Simulado Bank', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  // The below test should fail as the app under test has 6 a11y issues
  it('finds no a11y issues', () => {
    cy.checkA11y()
  })

  // The below test should fail as the app under test has color-contrast issues
  it('finds no "color-contrast" a11y issue', () => {
    cy.checkA11y(null, {
      runOnly: ["color-contrast"],
    });
  })

  // The below test should pass as we're toggling the a11y mode before checking a11y
  it('finds no "color-contrast" a11y issue', () => {
    cy.get('.switch').click()

    cy.checkA11y(null, {
      runOnly: ["color-contrast"],
    });
  })

  // The below test should fail as the app under test has image-alt issues
  it('finds no "image-alt" a11y issue', () => {
    cy.checkA11y(null, {
      runOnly: ["image-alt"],
    });
  })

  // The below test should pass as we're toggling the a11y mode before checking a11y
  it('finds no "image-alt" a11y issue', () => {
    cy.get('.switch').click()

    cy.checkA11y(null, {
      runOnly: ["image-alt"],
    });
  })
})
