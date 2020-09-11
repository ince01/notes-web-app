describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('/signIn');

    cy.get('[data-testid="email"]').type('fake@email.com').should('have.value', 'fake@email.com');

    cy.get('[data-testid="password"]').type('123123').should('have.value', '123123');

    cy.get('[data-testid="signin-button"]').click();
  });
});
